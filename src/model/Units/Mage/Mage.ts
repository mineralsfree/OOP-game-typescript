import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
import {Field} from "../../Field/Field";
import {
    AllUnitsAttackBehavior, IActionBehavior,
    IActionPossibility,
    RangePossibility,
} from "../Behavior/ActionBehavior";

const mage = UnitConstants.Mage;

export class Mage extends Unit {
    constructor(team: string) {
        super(mage.maxHP, mage.damage, mage.initiative, mage.type, team, mage.name);
        this.attackPossibility = new RangePossibility();
        this.actionBehavior = new AllUnitsAttackBehavior();

    }

    dealDamage(target: Unit, field?: Field) {
        if (field) {
            field.dealMageDamage(this.damage);
        }
    }

    attackPossibility: IActionPossibility;
    actionBehavior: IActionBehavior;
}