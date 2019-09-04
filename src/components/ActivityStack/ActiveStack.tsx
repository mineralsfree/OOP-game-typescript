import React, {Component} from 'react';
import './ActiveStack.sass';
import {Unit} from "../../model/Units/Unit/unit";
import {Cell} from "../Cell/Cell";
import {cn} from "@bem-react/classname";

const StackCN = cn('stack');

export interface IActiveStack {
    stack: Array<Unit>
}

export class ActiveStack extends Component<IActiveStack, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const arr = this.props.stack.map((el, i) => {
            return (<>{!el.dead ?
                <div > {el.team} <Cell warrior={el}/>
                </div>
                : <></>}</>)
        })
        return (<div className={StackCN('container')}>
            {arr}
        </div>)
    }
}