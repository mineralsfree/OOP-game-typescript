import React, {Component} from 'react';
import {cn} from "@bem-react/classname";
import {IUnit} from "../../model/Units/Unit/IUnit";
import './Cell.sass'

export interface ICellComponentProps {
    warrior:  IUnit,

}

const cellCN = cn('cell');

export class Cell extends Component<ICellComponentProps, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const warrior = this.props.warrior;
        return (
            <div className={[cellCN(warrior.type.toLowerCase()), cellCN('container')].join(' ')}>

            </div>)
    }
}