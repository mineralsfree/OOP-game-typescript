import {IGame} from "./IGame";
import {Field, ICoordinates} from "../Field/Field";
import {Unit} from "../Units/Unit/unit";
import {sortByInitiativity} from './sortHelper';

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
        let targetField = sourceUnit.team === "A" ? this.fieldB : this.fieldA;
        let target = targetField.getUnitByID(targetID);
        if (target && !target.dead && target.attackable) {
            sourceUnit.dealDamage(target, targetField)
        } else {
            return 0;
        }
        return 1;
    }

    public DisplayPossibleUnitsToAttack(unit: Unit): void {
        let field: Array<Array<Unit>>;
        if (unit.team === "A") {
            this.fieldA.resetValueOfUnit('attackable');
            field = this.fieldB.field
        } else {
            this.fieldB.resetValueOfUnit('attackable');
            field = this.fieldA.field
        }
        let arr: Array<ICoordinates>;
        arr = unit.getAttackCoordinates(field);
        arr.forEach((el) => {
            if (!field[el.y][el.x].dead) {
                field[el.y][el.x].attackable = true;
            }
        });
    }
}