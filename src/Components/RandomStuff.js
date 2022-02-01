import React, { useState } from 'react';

function RandomStuff(props) {

    const[ans, setAns] = useState(0)

    function addq(){
        
        // Generate the numbers
        var x = Math.floor( Math.random() * 100)        
        var y = Math.floor( Math.random() * 100)

        // Generate the answer and question
        var a = (x + y).toString()
        var s = x.toString()+" + "+y.toString()+" = ?"

        // Show the question to the user
        setMessage(s)

        // Save the answer in state variable
        setAns(a)
    }

    function makeNumberQuestion(){
        var s = ""
        var x = Math.floor( Math.random() * 10)        
        var y = Math.floor( Math.random() * 10)
        var z = Math.floor( Math.random() * 4)
        var a = 0

        

        switch(z){
            case 0:
                x = Math.floor( Math.random() * 100)        
                y = Math.floor( Math.random() * 100)
                a = (x + y).toString()
                s = x.toString()+" + "+y.toString()+" = ?"
                break
            case 1:
                a = (x - y).toString()
                s = x.toString()+" - "+y.toString()+" = ?"
                break
            case 2:
                a = (x * y).toString()
                s = x.toString()+" * "+y.toString()+" = ?"
                break
            case 3:
                a = (Math.floor(x / y)).toString() + " r "+x % y
                s = x.toString()+" / "+y.toString()+" = ? (rounded)"
                break
        }
        
        // Show the question to the user
        setMessage(s)
        
        // Save the answer in state variable
        setAns(a)

        console.log(s)
        console.log(a)
    }
    function numberQuestion2(){
        var c = 0
        var s = ""
        while(c < 10){
            s+=Math.floor(Math.random() * 10).toString()+" "            
            c++
        }            
        setAns(s)
        setMessage(s)
    }
    function checkInput(){
        var userInputValue = document.getElementById("userInput").value
        if(userInputValue === ans)
            console.log("answer is correct")
        else
            console.log(userInputValue +" != "+ans)

    }
    function clearMessage(){
        setMessage("")
    }
    function setMessage(text){
        document.getElementById("messageDisplayBox").innerHTML = text
    }
    // make question functions will make a string for a question and save an answer in state
    // user can type into input and then press check
    // check function checks the input with the saved answer 
    // then displays feedback

  return (
    <div className='randomStuffWindow'>
        <div className='closeButton' onClick={props.close}>x</div>
        <div onClick={addq}>add</div>
        <div onClick={makeNumberQuestion}>numbers</div>
        <div onClick={numberQuestion2}>numbers2</div>
        <div id='messageDisplayBox' style={{height:"80px", width:"220px", border:"1px solid black"}}></div>
        <div onClick={clearMessage}>clear</div>
        <input id='userInput'></input>
        <div onClick={checkInput}>Check</div>
    </div>
  )
}

export default RandomStuff;
