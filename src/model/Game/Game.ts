import {IGame} from "./IGame";
import {Field} from "../Field/Field";
import {Unit} from "../Units/Unit/unit";
import {sortByInitiativity} from './sortHelper';
import {AllUnitsAttackBehavior, HealBehavior, SingleUnitAttackBehavior} from "../Units/Behavior/ActionBehavior";

export class Game implements IGame {
    order: Array<Unit>;
    round: number;
    activeUnit: Unit;
    fieldA: Field;
    fieldB: Field;

    constructor() {
        this.fieldA = new Field('A', null);
        this.fieldB = new Field("B", null);
        this.order = (this.fieldA.flatArr.concat(this.fieldB.flatArr)).sort(sortByInitiativity);
        this.activeUnit = this.order[0];
        this.round = 1;
    }

    getNextAttackingWarior(): Unit {
        this.fieldA.resetValueOfUnit('active');
        this.fieldB.resetValueOfUnit('active');
        let warrior = this.order.shift();
        while (warrior && warrior.dead) {
            warrior = this.order.shift();
        }
        if (warrior) {
            warrior.active = true;
            this.activeUnit = warrior;
        } else {
            this.nextRound();
            return this.getNextAttackingWarior();
        }
        return warrior;
    };

    private nextRound() {
        this.order = (this.fieldA.flatArr.concat(this.fieldB.flatArr)).sort(sortByInitiativity);
        this.round++;
    }

    public gameOver() {
        return (!(this.fieldB.teamAlive()) || !(this.fieldA.teamAlive()))
    }

    public dealDamage(targetID: number) {
        let sourceUnit = this.activeUnit;
        const [ allieField , enemyField] = this.getFieldToAttack(sourceUnit)
        let target = sourceUnit.attackPossibility.getActionTargets(allieField,enemyField, sourceUnit);
        if (target && !target.dead && target.attackable) {
            if (sourceUnit.actionBehavior instanceof HealBehavior) {
                sourceUnit.actionBehavior.heal(target, sourceUnit);
            } else if (sourceUnit.actionBehavior instanceof AllUnitsAttackBehavior || sourceUnit.actionBehavior instanceof SingleUnitAttackBehavior) {
                sourceUnit.actionBehavior.dealDamage(targetField.flatArr, target, sourceUnit);
            }
            // sourceUnit.dealDamage(target, targetField)
        } else {
            return 0;
        }
        return 1;
    }

    private getFieldToAttack(unit: Unit): Array<Array<Array<Unit>>> {

        if (unit.team === "A") {
            return [this.fieldB.field, this.fieldA.field]
        } else {
            return [this.fieldA.field, this.fieldB.field]
        }
    }

    public DisplayPossibleUnitsToAttack(unit: Unit): void {
        this.fieldB.resetValueOfUnit('attackable');
        this.fieldA.resetValueOfUnit('attackable');
        let field: Array<Array<Unit>>;
        let enemyField: Array<Array<Unit>>;
        if (unit.team === "A") {
            field = this.fieldA.field;
            enemyField = this.fieldB.field;
        } else {
            field = this.fieldB.field;
            enemyField = this.fieldA.field;
        }
        let arr = unit.attackPossibility.getActionTargets(enemyField, field, unit);

        arr.forEach((el) => {
            if (!el.dead) {
                el.attackable = true;
            }
        });
    }
}