import {Unit} from "../Unit/unit";
import {WitchDoctor} from "../WitchDoctor/Healer";

export interface IActionPossibility {
    getActionTargets(enemyField: Array<Array<Unit>>, AllieField: Array<Array<Unit>>, self: Unit): Array<Unit>
}

export interface IActionBehavior {
    getActionBehaviorType(): string;
}

export class hexerBehavior implements IActionBehavior{
    getActionBehaviorType(): string {
        return "Hex";
    }
    hex(target: Unit): void{
        target.hexed = true;
    }
}


export class SingleUnitAttackBehavior implements IActionBehavior {
    dealDamage(enemyField: Array<Unit>, target: Unit, source: Unit): void {
        target.HP -= source.damage;
    }

    getActionBehaviorType(): string {
        return "Attack";
    }
}

export class AllUnitsAttackBehavior implements IActionBehavior {
    dealDamage(enemyField: Array<Unit>, target: Unit, source: Unit): void {
        enemyField.forEach((el) => el.HP -= source.damage)
    }
    getActionBehaviorType(): string {
        return "Attack";
    }
}

export class HealBehavior implements IActionBehavior {
    heal(target: Unit, source: Unit): void {
        target.HP += source.damage;
    }

    getActionBehaviorType(): string {
        return "Heal";
    }
}

export class RangePossibility implements IActionPossibility {
    getActionTargets(enemyField: Array<Array<Unit>>, AllieField: Array<Array<Unit>>, self: Unit): Array<Unit> {
        let field;
        if (self instanceof WitchDoctor) {
            field = AllieField;
        } else {
            field = enemyField;
        }

        let arr: Array<Unit> = [];
        field.forEach((el, i) => {
            el.forEach((elem, j) => {
                if (!elem.dead) {
                    arr.push(elem);
                }
            })
        });
        return arr;
    }
}

export class MeleePossibility implements IActionPossibility {
    getActionTargets(enemyField: Array<Array<Unit>>, AllieField: Array<Array<Unit>>, self: Unit): Array<Unit> {
        const getAliveLine = () => {
            for (let i = 0; i < enemyField.length; i++) {
                for (let j = 0; j < enemyField[0].length; j++) {
                    if (!enemyField[i][j].dead) {
                        return i;
                    }
                }
            }
            return 0;
        }
        let aliveLine = getAliveLine();
        const fieldSize = {
            x: enemyField[0].length,
            y: enemyField.length
        }
        let arr: Array<Unit> = [];
        if (self.y === 0) {
            if (self.x === 0 && !enemyField[aliveLine][self.x].dead) {
                return [enemyField[aliveLine][0], enemyField[aliveLine][1]]
            } else if (self.x === fieldSize.x - 1 && !enemyField[aliveLine][self.x].dead) {
                return [enemyField[aliveLine][fieldSize.x - 1], enemyField[aliveLine][fieldSize.x - 2]];
            } else {
                // TODO: fix bug
                for (let i = 0; i < fieldSize.x; i++) {
                    if (!enemyField[aliveLine][i].dead) {

                        arr.push(enemyField[aliveLine][i])
                    }
                }
            }
            return arr;
        }
        return arr;
    }

}