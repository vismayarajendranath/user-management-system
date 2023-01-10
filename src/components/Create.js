import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from  'react-router-dom'
import { Link } from 'react-router-dom';



const Create = () =>{

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const history = useNavigate()

  const header = { "Access-Control-Allow-Origin": "*"}


  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log("clicked");
    axios.post(
      'https://638f70564ddca317d7f8cf43.mockapi.io/crud-project',{
      name : name,
       email : email,
      header,
    })

    .then(() =>{
      history('/read')

    })
   
  }



    return <>

  <div id='xx'>
  <div  className='d-flex justify-content-between m-2'>
    <h2> Create </h2>
<Link to="/read"> <button className='btn btn-primary'>show Data</button>
</Link>

    </div>
    
    <form id='yy'>
    <div   className="container mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" 
        onChange={(e)=>setName(e.target.value)}/>
  
  </div>

  {/* {name}
  {email} */}



  <div class="container mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" 
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  
  
  <button id='btn' type="submit" className="btn btn-primary " onClick={handleSubmit}>Submit</button>
</form>
  </div>


    
    </>
}
export default Create