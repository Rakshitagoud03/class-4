import React from 'react'
import Ex5 from './Component/Ex5'
import Ex1 from './Component/Ex1'
import Ex6 from './Component/Ex6'
import Ex7 from './Component/Ex7'
import Ex8 from './Component/Ex8'
import Ex2 from './Component/Ex2'
import Ex3 from './Component/Ex3'
import Ex4 from './Component/Ex4'
import Ex9 from './Component/Ex9'
import Ex10 from './Component/Ex10'
import Ex11 from './Component/Ex11'
// <Ex9 itemPerPage={20}/> 

/* react hook=>method->dedicated to func comp,func,const arrow,const local */
/*Her itemperpage sent item as props to Ex9.jsx */
function App(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">React Hooks</h3>
        </div>
      </div>    
         <Ex11/>
    </div>
  )
}
export default App  