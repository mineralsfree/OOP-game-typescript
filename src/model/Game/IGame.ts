import {Unit} from "../Units/Unit/unit";
import {Field} from "../Field/Field";

export interface IGame {
    fieldA: Field;
    fieldB: Field;
    activeUnit: Unit | null;
}