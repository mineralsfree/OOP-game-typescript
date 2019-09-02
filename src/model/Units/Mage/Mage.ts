import {Unit} from "../Unit/unit";
import {UnitConstants} from "../../Constants";
const mage = UnitConstants.Mage;
export class Mage extends Unit{
    constructor(team: string){
        super(mage.maxHP,mage.damage,mage.initiative, mage.type, team);
    }

}