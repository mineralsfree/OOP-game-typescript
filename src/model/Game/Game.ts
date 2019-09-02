import {IGame} from "./IGame";
import {Field} from "../Field/Field";
import {Unit} from "../Units/Unit/unit";
import {getOrderByInitiativity} from "./OrderHelper";

export class Game implements IGame {
    get order(): Array<Unit> {
        return this._order;
    }
    private _order: Array<Unit>;
    constructor(){
        this.fieldA = new Field('A', null);
        this.fieldB = new Field("B", null);
        console.log(this.fieldA.getUnitsSortedByInitiative());
        console.log(this.fieldB.getUnitsSortedByInitiative());

        this._order =getOrderByInitiativity(this.fieldA.getUnitsSortedByInitiative(), this.fieldB.getUnitsSortedByInitiative());
    }

    fieldA: Field;
    fieldB: Field;

    nextMove() {

    }
    // private  getOrderByInitiativity (arr1: IUnit, arr2) {
    //     let i = 0;
    //     let j = 0;
    //     let arr = [];
    //     while (i < arr1.length && j < arr2.length) {
    //         if (arr1[i].initiative > arr2[j].initiative) {
    //             arr.push(arr1[i]);
    //             i++;
    //         } else if (arr1[i].initiative < arr2[j].initiative) {
    //             arr.push(arr2[j]);
    //             j++;
    //         } else if (arr1[i].initiative === arr2[j].initiative && Math.random() < 0.5) {
    //             arr.push(arr1[i]);
    //             i++;
    //         } else {
    //             arr.push(arr2[j]);
    //             j++;
    //         }
    //     }
    //     while (i< arr1.length){
    //         arr.push(arr1[i]);
    //         i++
    //     }
    //     while (j< arr2.length){
    //         arr.push(arr2[j]);
    //         j++
    //     }
    //     return arr;
    // }
}