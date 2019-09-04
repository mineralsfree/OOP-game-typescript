import React, {Component} from 'react';
import {cn} from "@bem-react/classname";
import './Cell.sass'
import {Unit} from "../../model/Units/Unit/unit";

export interface ICellComponentProps {
    warrior:  Unit,
}

const cellCN = cn('cell');

export class Cell extends Component<ICellComponentProps, any> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const warrior = this.props.warrior;
        const className = [
            cellCN(warrior.type.toLowerCase()),
            cellCN('container'),
            warrior.active? cellCN( 'active'): '',
            warrior.attackable? cellCN('attackable'): '',
            warrior.dead? cellCN('dead'): ''
        ]
        return (
            <div className={className.join(' ')}>
                {warrior.id}
                {!warrior.dead ?                 <span  className={cellCN('health')} style={{width: `${warrior.HP/warrior.maxHP*100}%`}}/> : ''}
            </div>)
    }
}