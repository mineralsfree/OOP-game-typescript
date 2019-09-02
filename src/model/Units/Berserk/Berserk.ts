import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";

const berserk = UnitConstants.Berserk;
export class Berserk extends Unit{
    constructor(team:string ){
        super(berserk.maxHP, berserk.damage, berserk.initiative, berserk.type, team)
    }

}