import {IGame} from "./IGame";
import {Field} from "../Field/Field";
import {Unit} from "../Unit/unit";
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
}