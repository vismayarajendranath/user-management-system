import React, { useEffect , useState} from 'react'
import axios from 'axios'
import { useNavigate } from  'react-router-dom'
import { Link } from 'react-router-dom';




const  Update = () =>{
  const [id , setId] = useState("")

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")

  const navigate = useNavigate()

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))


  },[])

  const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://638f70564ddca317d7f8cf43.mockapi.io/crud-project/${id}`,{
      name : name,
      email : email,
    }).then (()=>{

      navigate("/read")

    })
  }





  return (
    <>
        <form>
    <div   className="container mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" 
    value={name}
        onChange={(e)=>setName(e.target.value)}
        />
  
  </div>

  {/* {name}
  {email} */}



  <div class="container mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  
  
  <button id='btn' type="submit" className="btn btn-primary mx-2 " onClick={handleUpdate} >Update</button>

  <Link to='/read'>  <button id='btn' type="submit" className="btn btn-primary mx-2" >Back</button>
</Link>
</form>
</>
  )
}

export default Update