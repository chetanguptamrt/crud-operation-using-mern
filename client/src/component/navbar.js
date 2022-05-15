import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Search from './search';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname;
    const [search,setSearch] = useState("")
    const doSearch =()=>{
        navigate(`/search?s=${search}`)
        if(location==="/search") 
            window.location.reload()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CRUD Operation</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" onKeyDown={(e)=>{if(e.which==13){doSearch()}}} type="search" name='search' onChange={(e)=>setSearch(e.target.value)} placeholder="Search by name" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={doSearch} type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;