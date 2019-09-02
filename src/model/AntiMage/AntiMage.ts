import {Unit} from "../Unit/unit";
import {UnitConstants} from "../Constants";
const antiMage = UnitConstants.AntiMage;
export class AntiMage extends Unit{
    constructor(team: string){
        super(antiMage.maxHP,antiMage.damage,antiMage.initiative, antiMage.type, team);
    }

}