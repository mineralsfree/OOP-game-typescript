import {IUnit} from "./IUnit";

export class Unit implements IUnit{
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
    get x(): number {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
    }
    set HP(value: number){
        if (value<0){
            this.dead = true;
        }
        this._HP = value
    }
    get HP(){
        return this._HP;
    }
    damage: number;
    maxHP: number;
    initiative: number;
    attackable: boolean;
    _HP: number;
    team: string;
    dead: boolean;
    type: string;
    active: boolean;
    private _x: number;
    private _y:  number;
    id: number;
    static i =0;
    // TODO: выпилить team из базового объекта, переименовать type =>warriorType
    constructor(maxHP: number,  damage: number, initiative: number,type: string, team: string ) {
        this.maxHP = maxHP;
        this.damage = damage;
        this.initiative = initiative;
        this._HP = maxHP;
        this.team = team;
        this.type= type;
        this.id = Unit.getID();
        this._x = 0;
        this._y = 0;
        this.active = false;
        this.dead = false;
        this.attackable = false;
}

static getID():number{
        return Unit.i++;
}
}