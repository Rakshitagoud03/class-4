import React,{useRef}from 'react'

function Ex7(props){
    const fName=useRef()
    const fEmail=useRef()
    const fMobile=useRef()

    const submitHandler=(event)=>{
        event.preventDefault()      //to avoid page refresh
        const data={
            name:fName.current.value,
            email:fEmail.current.value,
            mobile:fMobile.current.value
        }
        console.log('register=',data)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12" text-center>
                    <h3><center className="display3 text-warning">Use-Ref</center></h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" ref={fName} id="name" className="form-control" required></input>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFOr="email">Email</label>
                                    <input type="email" name="email" ref={fEmail} id="email" className="form-control" required></input>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" name="mobile" ref={fMobile} id="mobile" className="form-control" required></input>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Register" className="btn btn-outline-success"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ex7