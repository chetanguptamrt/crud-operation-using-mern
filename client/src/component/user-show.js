import React,{useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const UserShow = () => {
    
    const [userData,setUserData] = useState([]);

    const getData = async()=>{
        axios.get("/users").then((res)=>{
            if(res.status===200){
                setUserData(()=>res.data)
                // console.log(userData)
            }
            else 
                alert(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteUser= async(id)=>{
        axios.delete(`/delete-user/${id}`).then((res)=>{
            if(res.status===200){
                alert(res.data)
                getData()
            }
            else 
                alert(res.data)
        })
    }
    
    return (
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((element, index)=>{
                        return (
                            <tr key={element._id}>
                                <th scope="row">{index+1}</th>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.mobile}</td>
                                <td>{element.work}</td>
                                <td className="d-flex">
                                    <NavLink to={`/view-user/${element._id}`} className="btn btn-sm btn-primary"><i className="fa fa-eye" aria-hidden="true"></i></NavLink> &nbsp;
                                    <NavLink to={`/edit-user/${element._id}`} className="btn btn-sm btn-success"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink> &nbsp;
                                    <button onClick={()=>deleteUser(`${element._id}`)} className="btn btn-sm btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default UserShow