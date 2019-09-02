import React, {Component} from 'react';
import {cn} from '@bem-react/classname'
import './Field.sass'
import {Field} from "../../model/Field/Field";
import {Cell} from "../Cell/Cell";
import {IUnit} from "../../model/Units/Unit/IUnit";
const fieldCN = cn('field');
export interface IFieldComponentProps{
    field: Field
    reverse?: boolean
}
export class FieldComponent extends Component<IFieldComponentProps, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let field = this.props.field.field;
        const { reverse } = this.props;
        if (this.props.reverse){
           field.reverse();
        }
        const cells=field.map((el, i)=>{
            let retArr:  JSX.Element[] = [];
            el.forEach((elem: IUnit, i)=>{
                retArr.push(<div key={i} className={fieldCN('cell')}><Cell warrior={elem}/> </div>)
            });
            return (<><div key={i}>{retArr}</div></>)
        });
        return (< div className={fieldCN('container')}>
            {!reverse ? <hr/> : ''}
            {cells}
        </div>);
    }
}