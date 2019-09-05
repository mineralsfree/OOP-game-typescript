import {Berserk} from "../Units/Berserk/Berserk";
import {Mage} from "../Units/Mage/Mage";
import {Archer} from "../Units/Archer/Archer"
import {FieldSizes} from "../Field/Constants";
import {getRandomInt} from './RandomHelper';
import {WitchDoctor} from "../Units/WitchDoctor/Healer";

const warriors = {
    1: Mage,
    2: Archer,
    3: WitchDoctor,
    4: Berserk,
}
export const fill = (team) => {
    let row1 = [];
    let row2 = [];
    let randomInt;
    let warrior;
    for (let i = 0; i < FieldSizes.x; i++) {
        randomInt = getRandomInt(1, 4);
        warrior = new warriors[randomInt](team);
        row1.push(warrior);
        warrior.x = i;
        warrior.y = 0;
        randomInt = getRandomInt(1, 3);
        warrior = new warriors[randomInt](team);
        warrior.x = i;
        warrior.y = 1   ;
        row2.push(warrior);
    }
    return [row1, row2];

};