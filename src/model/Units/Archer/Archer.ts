import {Unit} from "../Unit/unit";
import {UnitConstants} from '../../Constants'
import {
    IActionBehavior,
    IActionPossibility,
    RangePossibility,
    SingleUnitAttackBehavior
} from "../Behavior/ActionBehavior";
const archer = UnitConstants.Archer;
export class Archer extends Unit{
    constructor(team: string) {
        super(archer.maxHP,archer.damage,archer.initiative,archer.type,team, archer.name);
        this.attackPossibility = new RangePossibility();
        this.actionBehavior = new  SingleUnitAttackBehavior();
    }

    attackPossibility: IActionPossibility;
    actionBehavior: IActionBehavior;

}