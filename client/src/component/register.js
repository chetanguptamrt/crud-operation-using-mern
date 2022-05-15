import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios'

const Register = () => {
	
	const navigate = useNavigate();
	const [inputValue, setInp] = useState({
		name:"",
		email:"",
		age:0,
		mobile:"",
		work:"",
		address:"",
		description:""
	})
	
	const submitData= async(e)=>{
		e.preventDefault()
		axios.post("/add",inputValue)
			.then((res)=>{
				if(res.data.message==="done"){
					navigate("/");
				} else {
					alert(res.data.message); 
				}
		})
	}
	const setData=(e)=>{
		const {name,value} = e.target;
		// console.log(setInp)
		setInp((preVal)=>{
			return {
				...preVal, [name]:value
			}
		})
	}
 	return (
    <div className='container-md mt-3'>
		<h3 className='text-center'>Add User</h3>
      <form onSubmit={submitData}>
        <div className="row">
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="name" className="form-label">Name</label>
				<input type="text" name="name" value={inputValue.name} onChange={setData} className="form-control" id="name" />
			</div>
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="email" className="form-label">Email</label>
				<input type="email" name="email" value={inputValue.email} onChange={setData} className="form-control" id="email" />
			</div>
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="mobile" className="form-label">Mobile</label>
				<input type="text" name="mobile" value={inputValue.mobile} onChange={setData} className="form-control" id="mobile" />
			</div>
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="age" className="form-label">Age</label>
				<input type="number" name="age" value={inputValue.age} onChange={setData} className="form-control" id="age" />
			</div>
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="work" className="form-label">Work</label>
				<input type="text" name="work" value={inputValue.work} onChange={setData} className="form-control" id="work" />
			</div>
			<div className="mb-2 col-lg-6 col-md-6 col-12">
				<label htmlFor="address" className="form-label">Address</label>
				<input type="text" name="address" value={inputValue.address} onChange={setData} className="form-control" id="address" />
			</div>
			<div className="col-12">
				<label htmlFor="exampleInputEmail1" className="form-label">Description</label>
				<textarea rows={5} name="description" value={inputValue.description} onChange={setData} className="form-control" id="exampleInputEmail1" />
			</div>
        </div>
		<div className='mt-3 mb-2 text-center'>
			<button type="submit" className="btn btn-primary">Add</button>
		</div>
      </form>
    </div>
  )
}

export default Register