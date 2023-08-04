import React,{useState,useEffect} from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state,setState]= useState(Array(9).fill(null));
  const [currp,setcurrP]= useState("X");

  const checkWinner = ()=>{
    const win =[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
    
    for(let i =0;i<win.length;i++){
      const [a,b,c] = win[i];
      if(state[a] !==null && state[a]===state[b]&&state[a]===state[c]) return true;
    }
    return false;
  };

const handleBlockvalue  =(index:number)=>{

  if(state[index]!==null)return;
  state[index] = currp;

  
  setcurrP(currp === "X"?"O":"X")
  
  //winning logic
  const win = checkWinner();
  setState(state)
  if(win){
    console.log(`${currp} won!!`)
  }
};
  return (
    
    <div className="App">
      <div className="row">
        <Block onClick={()=>handleBlockvalue(0)} value={state[0]}/>
        <Block onClick={()=>handleBlockvalue(3)} value={state[3]}/>
        <Block onClick={()=>handleBlockvalue(6)} value={state[6]}/>
        </div>
      <div className="rows">
        <Block onClick={()=>handleBlockvalue(1)} value={state[1]}/>
        <Block onClick={()=>handleBlockvalue(4)} value={state[4]}/>
        <Block onClick={()=>handleBlockvalue(7)} value={state[7]}/></div>
      <div className="row">
        <Block onClick={()=>handleBlockvalue(2)} value={state[2]}/>
        <Block onClick={()=>handleBlockvalue(5)} value={state[5]}/>
        <Block onClick={()=>handleBlockvalue(8)} value={state[8]}/></div>
      
    </div>
  );
}

export default App;
