import axios from 'axios'
import React, { useRef } from 'react'

function Form() {
     const inputPhone = useRef()
     const inputPassword = useRef()

     function click (e){
        e.preventDefault()
        console.log(inputPhone.current.value)
        console.log(inputPassword.current.value)
    
        let data = {
          phone:  inputPhone.current.value, 
          password: inputPassword.current.value 
        }
        let url = "https://comfortable-gold-belt.cyclic.app/login" 

        axios.post(url,data).then(
          (res)=>{
            console.log(res)
          }
        ).catch(
          (err)=>{
            console.log(err)
          }
        )
      }
  return (
    <>
      <form className='container mt-5'>
  <div className="mb-3">
    <label  for="numberInputEmail1" className="form-label" >Phone number</label>
    <input ref={inputPhone} type="number" className="form-control" id="numberInputEmail1" aria-describedby="numberHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input ref={inputPassword} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={click} type="submit"  className="btn btn-primary">Submit</button>
</form> 
    </>
  )
}

export default Form