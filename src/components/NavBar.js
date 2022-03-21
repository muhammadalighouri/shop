import React from 'react'
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import { nav } from '../assets/data'

const navbar = () => {


    return (
        <>
            <header>
                <div className="brand">
                    LOGO
                </div>
                <nav>
                    <ul>
                        {
                            nav.map((li, i) => {
                                return (
                                    <NavLink key={i} to={li.path}>

                                        <li className={
                                            window.location.pathname === li.path
                                                ? "item active"
                                                : "item "
                                        } >{li.name}</li>
                                    </NavLink>
                                )
                            })
                        }


                    </ul>
                </nav>
                <div className="search">
                    <input placeholder='Search..' type="search" />
                </div>
            </header>


        </>
    )
}

export default navbar