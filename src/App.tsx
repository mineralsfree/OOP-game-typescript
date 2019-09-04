import React, {Component} from 'react';
import './App.css';
import {Game} from "./model/Game/Game";
import {FieldComponent} from "./components/Field/Field";
import {ActiveStack} from "./components/ActivityStack/ActiveStack";

export class App extends Component {
    state = {
        game: new Game(),
        gameOver: false,
    };
    DisplayPossibleUnitsToAttack = () => {
        this.state.game.DisplayPossibleUnitsToAttack(this.state.game.getNextAttackingWarior());
        this.update();
    };
    handleAttackClick = (id: number) => {
        const game = this.state.game;
        if (game.dealDamage(id)) {
            if (game.gameOver()) {
                this.setState({
                        ...this.state,
                        gameOver: !this.state.gameOver
                    }
                );
            }
            this.DisplayPossibleUnitsToAttack();
        } else {
            alert('чел ты...')
        }
    };
    update = () => {
        this.setState({
                ...this.state,
                game: this.state.game
            }
        )
    }

    componentDidMount(): void {
        this.DisplayPossibleUnitsToAttack();

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.gameOver ? "GAME OVER, PRESS F5 To PLAY AGAIN" : `Round : ${this.state.game.round}`}
                    <ActiveStack stack={this.state.game.order}/>
                    <div>
                        TEAM A
                        <FieldComponent attack={this.handleAttackClick} field={this.state.game.fieldA} reverse={true}/>
                        <FieldComponent attack={this.handleAttackClick} field={this.state.game.fieldB}/>
                        TEAM B
                    </div>
                </header>
            </div>
        );
    }

}

export default App;
