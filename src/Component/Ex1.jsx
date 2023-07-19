import React, {useState} from 'react'

/*const arrow functional comp */
const Ex1=(props)=>{
    //const [state,handler]=useState(initial value)

    //state is internal var->state is private to 
    const[x,setX]=useState(1)       //mutable states
    const[title,setTitle]=useState('Welocome to state')
    const[view,setView]=useState('false')
    const[users,setUsers]=useState(['raju','john','david'])
    const[emp,setEmp]=useState({
        name:'samay',
        email:'samay@gmail.com'
    })
    //state name is hidden in console and its secure,whereas in class compit will be open

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h4 className="display-4 text-warning">useState Hook</h4>
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success">x={x}</h1>
                    <hr/>

                    <h4 className="text-warning">{title}</h4>
                    <hr/>

                    <h4 className={view ? "text-success" : "text-danger"}>
                        view={view ? "say True":"say False"}
                    </h4>
                    <hr/>

                    <ul className="list-group">
                        {
                            users.map((item,index)=>{
                                return(
                                    <li className="list-group-item" key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Ex1