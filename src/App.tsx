import React, {useState} from 'react';
import './App.css';
import {Property} from "csstype";
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

enum Filter {
    ALL = "All",
    EVEN = "Even",
    ODD = "Odd",
}


function App() {

    //return <><Component n ={3}/> <OnlyEven arr ={[1, 2, 3, 4, 5]}/> <Temperature t={-451}/> </>;
    //return <div className="App"><Component/></div>;
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("");
    const [numbers, setNumbers] = useState([1, 2, 3]);


    function submitHandler() {
        
    }

    function getFiltered() {
        return numbers;
    }

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
            <br/>
        {getFiltered().join(", ")}
        <br/>
        <button onClick={() => setNumbers([])}>Очистить</button>
        <button onClick={() => setNumbers(Array.from(Array(10).keys()))}>Заполнить</button>
        </div>;
}

export default App;
