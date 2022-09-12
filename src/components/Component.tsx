import {ChangeEvent, useState} from 'react'

const ISODateOnly = (s?: string): string => {
    const result = s?.split('T');
    return result ? result[0] : "";
};

export function Component ({}){

    const [a, setA] = useState(0);
    const [m, setM] = useState(1);
    const [p, setP] = useState(1);
    const [d, setD] = useState<Date>()

    const clickPlusHandler = () => {
        setA(a + p);
    }

    const clickMinusHandler = () => {
        setA(a - m);
        if ((a - m) <= 0) {
            setA(0);
        }
    }

    const clickResetHandler = () => {
        setA(0);
        setP(1);
        setM(1);
    }

    const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setD(new Date(e.target.value));
    };

    const diff = (): string => {
        const d2 = new Date;
        const d1 = d ? d.getTime() : 0;

        return String(Math.round((d2.getTime() - d1)/1000));
    };


    return <>
        <input
            type={"range"}
            id={"rangeInput"}
            value={m}
            min={1}
            max={10}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setM(Number(e.target.value))}
        />
        {m}
        <button onClick={clickMinusHandler}>-</button>
        <h2>{a}</h2>
        <input
            type={"range"}
            min={1}
            max={10}
            value={p}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setP(Number(e.target.value))}
        />
        {p}
        <button onClick={clickPlusHandler}>+</button>
        <br/>
        <button onClick={clickResetHandler}>Reset</button>
        <br/>
        <br/>
        <input type="date" value ={ISODateOnly(d?.toISOString())} onChange={dateChangeHandler} />
        <br/>
        {/*{ISODateOnly(d?.toISOString())}*/}
        Я прожил секунд: {diff()}
        </>;
}