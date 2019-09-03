import React, {Component} from 'react';
import './App.css';
import {Game} from "./model/Game/Game";
import {FieldComponent} from "./components/Field/Field";
import {HealthDashboard} from "./components/HealthDashboard/HealthDashboard";

export class App extends Component{
    state = {
        game: new Game()
    };
    handleClick = () =>{
        this.state.game.DisplayPossibleUnitsToAttack(this.state.game.getNextAttackingWarior());
        this.setState({
                ...this.state,
           game: this.state.game
        }
        )
    }
    render(){
        console.log(this.state.game.order);
        return (
            <div className="App" >
                <header className="App-header">
                    <div>
                        <FieldComponent  game={this.state.game} field={this.state.game.fieldA} reverse={true}/>
                        <FieldComponent  game={this.state.game} field={this.state.game.fieldB}/>
                    </div>
                    <HealthDashboard game={this.state.game} fieldA={this.state.game.fieldA} fieldB={this.state.game.fieldB} />
                    <button onClick={()=>{this.handleClick()}}>NEXT</button>
                </header>
                {/*{<p>{JSON.stringify(this.state.game.order)}</p>}*/}

            </div>
        );
    }

}

export default App;
