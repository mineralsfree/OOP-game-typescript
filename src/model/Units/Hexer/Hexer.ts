import {Unit} from "../Unit/unit";
import {hexerBehavior, IActionBehavior, IActionPossibility, RangePossibility} from "../Behavior/ActionBehavior";
import {UnitConstants} from "../../Constants";
const hexer = UnitConstants.Hexer;
export class Hexer extends Unit{
    constructor(team: string) {
        super(hexer.maxHP, hexer.damage, hexer.initiative, hexer.type, team, hexer.name);
        this.attackPossibility = new RangePossibility();
        this.actionBehavior = new hexerBehavior();
    }
        actionBehavior: IActionBehavior;
    attackPossibility: IActionPossibility;


}