import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
import {Field} from "../../Field/Field";
import {HealBehavior, IActionBehavior, IActionPossibility, RangePossibility} from "../Behavior/ActionBehavior";
const  witchDoctor= UnitConstants.WitchDoctor;
export class WitchDoctor extends Unit {
    constructor(team: string){
        super(witchDoctor.maxHP, witchDoctor.damage, witchDoctor.initiative, witchDoctor.type, team, witchDoctor.name)
        this.attackPossibility= new RangePossibility();
        this.actionBehavior =new HealBehavior()
    }
    dealDamage(target: Unit, field?: Field) {
        target.HP+=witchDoctor.damage;
    }
    actionBehavior: IActionBehavior;
    attackPossibility: IActionPossibility;
}