import React, {Component} from 'react';
import {cn} from "@bem-react/classname";
import './Cell.sass'
import {Game} from "../../model/Game/Game";
import {Unit} from "../../model/Units/Unit/unit";

export interface ICellComponentProps {
    warrior:  Unit,
    game: Game

}

const cellCN = cn('cell');

export class Cell extends Component<ICellComponentProps, any> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const warrior = this.props.warrior;
        const className = [
            cellCN(warrior.type.toLowerCase()),
            cellCN('container'),
            warrior.active? cellCN( 'active'): '',
            warrior.attackable? cellCN('attackable'): ''
        ]
        return (
            <div className={className.join(' ')}>
                {/*{'X: ' + warrior.x + ' Y: ' + warrior.y }*/}
                {/*{'Team: ' + warrior.team }*/}
                {/*{warrior.attackable ? "A" : "B"}*/}
            </div>)
    }
}