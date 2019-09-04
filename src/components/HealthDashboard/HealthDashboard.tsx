import React, {Component} from "react";
import {Unit} from "../../model/Units/Unit/unit";
import {Field} from "../../model/Field/Field";
import './HealthDashboard.sass'

import {cn} from "@bem-react/classname";
import {Cell} from "../Cell/Cell";

const dashBoardCN = cn('dashboard');

export interface HealthDashboardProps {
    field: Field;
}

export class HealthDashboard extends Component<HealthDashboardProps, any> {

    getNodeArray = (field: Array<Unit>): React.ReactNodeArray => {
        return field.map((el, i) => {
            return (!el.dead ?<div key={i} className={dashBoardCN('item')}>
                <Cell warrior={el}/>
                    <span style={ {width: el.HP/2}} className={dashBoardCN('health')}>{el.HP}</span>
            </div> : '')
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {field} = this.props;
        const fieldElems = this.getNodeArray(field.getUnitsSortedByHealthPoints());
        return (
            <div className={dashBoardCN('container')}>
                <div className={dashBoardCN('A')}>
                    {fieldElems}
                </div>
            </div>
        );
    }
}