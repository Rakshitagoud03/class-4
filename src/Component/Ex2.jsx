import React,{useState} from 'react'

/*const local func component */
const Ex2=function(props){
    const[x,setX]=useState(1)       //mutable states

    const[title,setTitle]=useState('Welcome to state')

    const[view,setView]=useState(false)

    const[users,setUsers]=useState(['raju','john','david'])

    const[emp,setEmp]=useState({
        name:'Samay',
        email:'samay@gmail.com'
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">UseState</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success">x={x}</h1>
                    <hr/>
                    <h4 className="text-warning">{title}</h4>
                    <hr/>
                </div>
            </div>
        </div>
    )
}
export default Ex2