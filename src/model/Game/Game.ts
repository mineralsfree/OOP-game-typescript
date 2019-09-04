import {IGame} from "./IGame";
import {Field, ICoordinates} from "../Field/Field";
import {Unit} from "../Units/Unit/unit";
import {FieldSizes} from "../Field/Constants";

export class Game implements IGame {
    get order(): Array<Unit> {
        return this._order;
    }
    private readonly _order: Array<Unit>;
    constructor(){
        this.fieldA = new Field('A', null);
        this.fieldB = new Field("B", null);
        this._order =this.getOrderByInitiativity(this.fieldA.getUnitsSortedByInitiative(), this.fieldB.getUnitsSortedByInitiative());
    }
    fieldA: Field;
    fieldB: Field;
    getNextAttackingWarior(): Unit | undefined {
        this.resetAttribute('active', this.fieldB);
        this.resetAttribute('active', this.fieldA);
            let warrior = this.order.shift();
            if (warrior) {
                warrior.active = true;
            }

        return warrior;
    };


    private  getOrderByInitiativity (arr1: Array<Unit>, arr2: Array<Unit>): Array<Unit> {
        let i = 0;
        let j = 0;
        let arr = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i].initiative > arr2[j].initiative) {
                arr.push(arr1[i]);
                i++;
            } else if (arr1[i].initiative < arr2[j].initiative) {
                arr.push(arr2[j]);
                j++;
            } else if (arr1[i].initiative === arr2[j].initiative && Math.random() < 0.5) {
                arr.push(arr1[i]);
                i++;
            } else {
                arr.push(arr2[j]);
                j++;
            }
        }
        while (i< arr1.length){
            arr.push(arr1[i]);
            i++
        }
        while (j< arr2.length){
            arr.push(arr2[j]);
            j++
        }
        return arr;
    }
    private resetAttribute(attribute: string, team: Field ){
        team.field.forEach((el, i)=>{
            el.forEach((elem, j)=>{
                // @ts-ignore
                elem[attribute] = false;

            })
        });
    }
    DisplayPossibleUnitsToAttack(unit: Unit| undefined) : void{
        if (!unit){
            return;
        }
        let field: Array<Array<Unit>>;
        if (unit.team === "A"){
            field = this.fieldB.field
        } else {
            field = this.fieldA.field
        }
        const getAllCoordinates = (filter = null):  Array<ICoordinates>=>{
            let arr: Array<ICoordinates> =[];
            field.forEach((el, i)=>{
                el.forEach((elem, j)=>{
                    if (!elem.dead){
                        arr.push({ x: elem.x, y: elem.y});
                    }
                })
            });
            return arr;
        };
        const getMeleeCoordinates = (x: number, y: number): Array<ICoordinates>=>{
            let arr: Array<ICoordinates> = [];
            if (y === 0){
                console.log(x)
                console.log(field)
                if (x===0 && !field[0][x].dead){
                    return [{x: 0, y:0},{x: 1, y:0} ]
                } else if( x===FieldSizes.x-1 && !field[0][x].dead) {
                    return [{x: FieldSizes.x - 1, y: 0}, {x: FieldSizes.x - 2, y: 0}]
                }
                else {
                    // TODO: fix bug
                    for (let i = 0; i < FieldSizes.x; i++) {
                        if (!field[0][i].dead){
                            arr.push({x:i,y:0})
                        }
                    }
                }
                return arr;
            }
            return arr;

        }
        let arr:  Array<ICoordinates> = [];
        switch (unit.type) {
            case'Mage':{
                arr =  getAllCoordinates();
                break;
            }
            case'Archer' :{
                arr = getAllCoordinates();
                break;
            }
            case'Berserk':{
                arr = getMeleeCoordinates(unit.x, unit.y);
                break;
            }

        }
        this.resetAttribute('attackable',this.fieldA );
        this.resetAttribute('attackable',this.fieldB );

        arr.forEach((el)=>{
            field[el.y][el.x].attackable = true;
        });

    }
}