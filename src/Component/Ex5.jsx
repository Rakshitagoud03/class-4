import React,{useEffect,useState} from 'react'
import Post from '../screen/Post'           //Post=component
                                            //post=filename

const URL='https://jsonplaceholder.typicode.com'
/*useEffect=> initial data,declared data or data  accessing from API*/

    //useEffect(callback func,[dependency list])
    /*
        React func comp lifecycle hooks
        mount 
            useEffect(()=>{},[])

        update->state / props - dep
            useEffect(()=>{},[dep])

        unmount
            useEffect(()=>{
                return ()=>{
                    //un mount stage
                }
            },[])
    */

    function Ex5(props){
        const[post,setPost]=useState([])
        const getPosts=async()=>{
            await fetch(`${URL}/posts`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(data=>data.json())
              .then(res=>{
                console.log('response=',res)
                setPost(res)
              })                        //handles rejected state
              .catch(err=>console.log(err))                      //handles rejected state
           }

           useEffect(()=>{
            getPosts()      //async func call
           },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-6 text-danger">UseEffect Hook</h3>
                </div>
            </div>
            <div className="row">
                {
                    post && post.map((item,index)=>{
                        return(
                            <Post key={index}{...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Ex5