import React, {FormEvent, useState} from 'react';
import './App.css';
import {Property} from "csstype";
import styles from "./components/Temperature.module.css";
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
    const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4]);

    const generateArray = (length: number, max: number) => (
        [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    );

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInput("");
        setNumbers([...numbers, Number(input)]);
        setFilter(Filter.ALL);
    }

    function getFiltered(){
        switch (filter) {
            case Filter.ODD:
                return numbers.filter(it => it % 2 !== 0);
            case Filter.EVEN:
                return numbers.filter(it => it % 2 === 0);
            case Filter.ALL:
                return numbers;
            default:
                return numbers;
        }
    }


    return <div className="App">
            <form onSubmit={submitHandler}>
                <input value={input} className="input" onChange={e => setInput(e.target.value)}/>
                <button type="submit" className="button1">+</button>
            </form>
        {getFiltered()?.join(", ")}
        <br/>
            {Object.values(Filter).map(filterValue =>
                <label>
                    <input
                        checked={filter === filterValue}
                        type="radio"
                        name="filter"
                        id = "radio"
                        onChange={() => setFilter(filterValue)}
                        className = "filters"/>
                    {filterValue}
                </label>
            )}
        <br/>
        <button className="button2" onClick={() => {setNumbers([]);
            setFilter(Filter.ALL);}}>Очистить</button>
        <button className="button2" onClick={() => {setNumbers(Array.from(Array(10).keys())); setFilter(Filter.ALL);}}>Заполнить</button>
        <button className="button2" onClick={() => {setNumbers(generateArray(10, 100)); setFilter(Filter.ALL);}}>Random</button>
        </div>;
}

export default App;
