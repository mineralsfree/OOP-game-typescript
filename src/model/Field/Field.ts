import {IField} from "./IField";
import {Unit} from "../Units/Unit/unit";
import {fill} from "../helpers/fillUnitsHelper";
export interface ICoordinates {
    x: number;
    y: number;
}
export class Field implements IField{
    field: Array<Array<Unit>>;
    team: string;
    flatArr: Array<Unit>;

    constructor(team: string, field:  Array<Array<Unit>> | null) {
        this.team = team;
        this.field = field ? field : fill(team);
        this.flatArr = this.field.flat();
    }
    getUnitsSortedByHealthPoints(): Array<Unit>{
        return this.flatArr.sort((a,b)=>a.HP > b.HP ? 1: -1);
    }
    getUnitByID(id: number): Unit{
        return this.flatArr.filter((el)=> el.id === id)[0];
    }
    dealMageDamage(damage: number): void{
        this.flatArr.forEach((el)=>{
            el.HP-=damage;
        })
    }
    teamAlive(): boolean{
        return this.flatArr.filter((el)=>!el.dead).length>0;
    }
    resetValueOfUnit(field: string){
        this.field.forEach((el, i) => {
            el.forEach((elem, j) => {
                    // @ts-ignore
                    elem[field] = false;
            })
        });
    }

}
