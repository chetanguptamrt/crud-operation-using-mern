import React,{useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, useNavigate} from "react-router-dom"

const Edit = () => {

    const {id} = useParams("");
    // console.log(id)
    const getData = ()=>{
        axios.get(`/user/${id}`).then((res)=>{
            if(res.status===200){
                setInp(()=>res.data)
                // console.log(user)
            }
            else 
                alert(res.data)
        })
    }

    useEffect(()=>{
        getData()
    }, [])

	const [inputValue, setInp] = useState({
		_id: "",
		name:"",
		email:"",
		age:0,
		mobile:"",
		work:"",
		address:"",
		description:""
	})
	
	const navigate = useNavigate();
	const updateUserData = (e)=>{
		e.preventDefault()
		axios.patch(`/update-user/${inputValue._id}`,inputValue)
			.then((res)=>{
				if(res.status===200){
					alert(res.data)
					navigate("/")
				} else {
					alert(res.data); 
				}
				// console.log(res)
		})
	}

	const setData=(e)=>{
		const {name,value} = e.target;
		// console.log(inputValue)
		setInp((preVal)=>{
			return {
				...preVal, [name]:value
			}
		})
	}

 	return (
    <div className='container-md mt-3'>
		<h3 className='text-center'>Edit User</h3>
      <form onSubmit={updateUserData}>
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
			<button type="submit" className="btn btn-primary">Update</button>
		</div>
      </form>
    </div>
  )
}

export default Edit