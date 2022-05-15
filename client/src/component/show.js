import React,{useState, useEffect} from 'react';
import axios from 'axios'
import {useParams, NavLink, useNavigate} from "react-router-dom"

const Show = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    const {id} = useParams("");
    // console.log(id)
    const getData = ()=>{
        axios.get(`/user/${id}`).then((res)=>{
            if(res.status===200){
                setUser(()=>res.data)
                // console.log(user)
            }
            else 
                alert(res.data)
        })
    }

    useEffect(()=>{
        getData()
    }, [])

    const deleteUser= async(id)=>{
        axios.delete(`/delete-user/${id}`).then((res)=>{
            if(res.status===200){
                alert(res.data)
                navigate("/")
            }
            else 
                alert(res.data)
        })
    }
    
    return (
        <div className='container mt-3'>
            <h1 style={{fontWeigth: 400, textAlign: "center", textTransform: 'capitalize'}}>{user.name}</h1>
            <div style={{textAlign: "right"}}>
                <NavLink to={`/edit-user/${user._id}`} className="btn btn-sm btn-success"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink> &nbsp;
                <button onClick={()=>deleteUser(`${user._id}`)} className="btn btn-sm btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <div className='row' style={{fontSize: "18px"}}>
                
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Name: </span> <span>{user.name}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Email: </span> <span>{user.email}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Mobile: </span> <span>{user.mobile}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Age: </span> <span>{user.age}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Work: </span> <span>{user.work}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Address: </span> <span>{user.address}</span>
                </div>
                <div className='offset-sm-1 col-sm-5 col-12 mt-2'>
                    <span style={{fontWeight: '500'}}>Description: </span> <span>{user.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Show