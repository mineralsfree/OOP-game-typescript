import {IUnit} from "./IUnit";

export class Unit implements IUnit{
    get y(): number|undefined {
        return this._y;
    }

    set y(value: number|undefined) {
        this._y = value;
    }
    get x(): number| undefined {
        return this._x;
    }
    set x(value: number|undefined) {
        this._x = value;
    }
    damage: number;
    maxHP: number;
    initiative: number;
    HP: number;
    team: string;
    type: string;
    private _x: number| undefined;
    private _y:  number| undefined;
    id: number;
    static i =0;
    // TODO: выпилить team из базового объекта, переименовать type =>warriorType
    constructor(maxHP: number,  damage: number, initiative: number,type: string, team: string ) {
        this.maxHP = maxHP;
        this.damage = damage;
        this.initiative = initiative;
        this.HP = maxHP;
        this.team = team;
        this.type= type;
        this.id = Unit.getID();
}

static getID():number{
        return Unit.i++;
}
}