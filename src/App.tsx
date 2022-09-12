import React from 'react';
import './App.css';
import {Component} from "./components/Component";
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
  return <div className="App"><Component/></div>;
}

export default App;
