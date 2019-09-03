import React, {Component} from "react";
import {Unit} from "../../model/Units/Unit/unit";
import {Field} from "../../model/Field/Field";
import './HealthDashboard.sass'

import {cn} from "@bem-react/classname";
import {Cell} from "../Cell/Cell";
import {Game} from "../../model/Game/Game";

const dashBoardCN = cn('dashboard');

export interface HealthDashboardProps {
    fieldA: Field;
    fieldB: Field;
    game: Game;
}

export class HealthDashboard extends Component<HealthDashboardProps, any> {

    getNodeArray = (field: Array<Unit>): React.ReactNodeArray => {
        return field.map((el, i) => {
            return (<div key={i} className={dashBoardCN('item')}>
                <Cell game={this.props.game}warrior={el}/>
                    <span style={ {width: el.HP/2}} className={dashBoardCN('health')}>{el.HP}</span>
            </div>)
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {fieldA, fieldB} = this.props;
        const fieldAElems = this.getNodeArray(fieldA.getUnitsSortedByHealthPoints());
        return (
            <div className={dashBoardCN('container')}>
                <div className={dashBoardCN('A')}>
                    {fieldAElems}
                </div>
            </div>
        );
    }
}