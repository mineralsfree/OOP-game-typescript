import {IUnit} from "./IUnit";

export class Unit implements IUnit{
    damage: number;
    maxHP: number;
    initiative: number;
    HP: number;
    team: string;
    type: string;
    // TODO: выпилить team из базового объекта, переименовать type =>warriorType
    constructor(maxHP: number,  damage: number, initiative: number,type: string, team: string ) {
        this.maxHP = maxHP;
        this.damage = damage;
        this.initiative = initiative;
        this.HP = maxHP;
        this.team = team;
        this.type= type;
}
}