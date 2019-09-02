import {Berserk} from "../Berserk/Berserk";
import {AntiMage} from "../AntiMage/AntiMage";
import {Archer} from "../Archer/Archer"
import {FieldSizes} from "../Field/Constants";
import {getRandomInt} from './RandomHelper';

const warriors = {
    1: AntiMage,
    2: Archer,
    3: Berserk
}
export const fill = (team)=>{
    let row1 =[];
    let row2 =[];
    let randomInt;
    for (let i = 0; i < FieldSizes.x; i++) {
        randomInt = getRandomInt(1,3);
        row1.push(new warriors[randomInt](team));
        randomInt =getRandomInt(1,2);
        row2.push(new warriors[randomInt](team));
    }
    return [row1, row2];

};