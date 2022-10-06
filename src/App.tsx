import React from 'react';
import './App.css';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {Property} from "csstype";
import Filter = Property.Filter;
//import {Component} from "./components/Component";
/*import {OnlyEven} from "./components/OnlyEven";
import {Temperature} from "./components/Temperature";

type ComponentProps = {
  n: number;
  m?: number;
  s?: string;
}

function Component({ n }: ComponentProps) {
  return <>{n*n}</>;
}*/

function App() {

    //return <><Component n ={3}/> <OnlyEven arr ={[1, 2, 3, 4, 5]}/> <Temperature t={-451}/> </>;
    //return <div className="App"><Component/></div>;

    return <div className="App">
            <form onSubmit={submitHandler}>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit">+</button>
            </form>
            {Object.values(Filter).map(filterValue =>
                <label>
                    <input
                        checked={filter === filterValue}
                        type="radio"
                        name="filter"
                        onChange={() => setFilter(filterValue)}/>
                    {filterValue}
                </label>
            )}
            
        </div>;
}

export default App;
