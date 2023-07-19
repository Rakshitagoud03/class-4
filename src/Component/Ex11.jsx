import React,{useReducer} from 'react'

//initial state
const initState={num:0};        //num=>property,object

//reducer
const mathReducer=(state,action)=>{
    //console.log('action=',action)
    if(action==='plus'){
        //plus reducer
        return{num:state.num+1}
    }else if(action==='minus'){
        //minus reducer
        if(state.num>0){
        return{num:state.num-1}
    }else{
        return{num:0}
    }
    }else if(action==='clear'){
        //clear reducer
        return{num:0}
    }else{
        console.log(`sorry,not a valid action`);
    }
}


function Ex11(props){
    //const [state,dispatcher]=useReducer(reducer,initial_state)
    //dispatcher=>receives job from view and sends to action,carries action
    //action=>performs action
    //reducer=>seggregates/decides action to perform

    const[state,dispatcher]=useReducer(mathReducer,initState)       //useREducer=>hook
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useReducer</h3>
                <h6>action,reducer,view=3 stages</h6>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <button onClick={()=>dispatcher('plus')} className="btn btn-success">Plus</button>
                <button onClick={()=>dispatcher('minus')}className="btn btn-danger float-end">Minus</button>
            </div>
        </div>
        
       <center><h6>display Output</h6></center> 
        <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="text-danger display-1">state={state.num}</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <button onClick={()=>dispatcher('clear')} className="btn btn-warning">Clear</button>
            </div>
        </div>
        </div>
    )
}
export default Ex11