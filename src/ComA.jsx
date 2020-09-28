import React, { useEffect, useState } from 'react';
import axios from "axios";

const ComA = () => {
    const [num , SetNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        // alert("hii");
        async function getData(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(response.data.name);
            setMoves(response.data.moves.length);
          
        }
    
        getData();
    
    });


    return (
        <React.Fragment>
            <h1>Pokemon</h1>
            <h1>You choose <span style={{color:"red"  }}>{num} value </span></h1>
            <h1>My name is <span style={{color:"red"  }}>{name} </span> </h1>
            <h1>I have  <span style={{color:"red"  }} >{moves} </span> moves </h1>
            <select value = {num} 
            onChange = {(event)=>{
                    SetNum(event.target.value)
                   
            }}
            >
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
                <option value= "6">6</option>
                <option value= "7">7</option>
                <option value= "8">8</option>
                <option value= "9">9</option>
                <option value= "10">10</option>
            </select>


        </React.Fragment>
    )
}

export default ComA;