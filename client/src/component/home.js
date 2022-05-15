import React from "react";
import UserShow from "./user-show";
import { NavLink } from 'react-router-dom';

const Home =()=>{
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink className="btn btn-primary" to="/add-user">Add Data</NavLink>
                </div>
                <div className="table-responsive">
                    <UserShow /> 
                </div>
            </div>
        </div>
    )
}
export default Home;