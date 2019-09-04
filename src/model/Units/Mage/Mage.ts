import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
import {Field} from "../../Field/Field";

const mage = UnitConstants.Mage;

export class Mage extends Unit {
    constructor(team: string) {
        super(mage.maxHP, mage.damage, mage.initiative, mage.type, team);
    }

    dealDamage(target: Unit, field?: Field) {
        if (field) {
            field.dealMageDamage(this.damage);
        }
    }
}
// TODO: заюзать паттерн стратегия
