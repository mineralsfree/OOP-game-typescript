import {IUnit} from "./IUnit";
import {Field, ICoordinates} from "../../Field/Field";
import {IActionBehavior, IActionPossibility} from "../Behavior/ActionBehavior";

export abstract class Unit implements IUnit {
    set HP(value: number) {
        if (value < 0) {
            this.dead = true;
        }
        this._HP = Math.min(value, this.maxHP);
    }

    get HP() {
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
    x: number;
    y: number;
    id: number;

    static i = 0;
    name: string;

    protected constructor(maxHP: number, damage: number, initiative: number, type: string, team: string, name: string) {
        this.maxHP = maxHP;
        this.damage = damage;
        this.initiative = initiative;
        this._HP = maxHP;
        this.team = team;
        this.type = type;
        this.id = Unit.getID();
        this.x = 0;
        this.y = 0;
        this.active = false;
        this.dead = false;
        this.attackable = false;
        this.name = name;
    }

    static getID(): number {
        return Unit.i++;
    }

    getAttackCoordinates(field: Array<Array<Unit>>): Array<ICoordinates> {
        let arr: Array<ICoordinates> = [];
        field.forEach((el, i) => {
            el.forEach((elem, j) => {
                if (!elem.dead) {
                    arr.push({x: elem.x, y: elem.y});
                }
            })
        });
        return arr;
    }

    dealDamage(target: Unit, field?: Field) {
        target.HP -= this.damage;
    }

   abstract  actionBehavior: IActionBehavior;
    abstract attackPossibility: IActionPossibility;
}

