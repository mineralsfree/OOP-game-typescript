import React, {Component} from 'react';
import {cn} from '@bem-react/classname'
import './Field.sass'
import {Field} from "../../model/Field/Field";
import {Cell} from "../Cell/Cell";
import {Game} from "../../model/Game/Game";
import {Unit} from "../../model/Units/Unit/unit";
const fieldCN = cn('field');
export interface IFieldComponentProps{
    field: Field
    reverse?: boolean
    game: Game
}
export class FieldComponent extends Component<IFieldComponentProps, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let field = this.props.field.field;
        const { reverse, game } = this.props;
        let lField;
        if (this.props.reverse){
            lField =  field.slice().reverse();

        } else {
            lField = field;
        }
        const cells=lField.map((el, i)=>{
            let retArr:  JSX.Element[] = [];
            el.forEach((elem: Unit, j)=>{
                retArr.push(<div key={j} className={fieldCN('cell')}>
                    <Cell  key={j} game={game} warrior={elem}/>
                </div>)
            });
            return (<><div key={i}>{retArr}</div></>)
        });
        return (< div className={fieldCN('container')}>
            {!reverse ? <hr/> : ''}
            {cells}
        </div>);
    }
}