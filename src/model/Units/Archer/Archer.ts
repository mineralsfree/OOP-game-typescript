import {Unit} from "../Unit/unit";
import {UnitConstants} from '../../Constants'
const archer = UnitConstants.Archer;
export class Archer extends Unit{
    constructor(team: string) {
        super(archer.maxHP,archer.damage,archer.initiative,archer.type,team);

    }

}