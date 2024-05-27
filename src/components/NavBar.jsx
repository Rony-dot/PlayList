import React from 'react'
import "../css/navbar.css"

const NavBar = ({ title, CompletedCount, CountTotalVideos }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://google.com">
                    <h3><i className="bi bi-film text-danger"></i> Video Playlist</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item px-2 mt-2'>
                            <div className="vr bg-light" style={{ height: "25px" }}></div>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" >{title}</button>
                        </li>
                    </ul>

                    <span className="navbar-text ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item     ">
                                <button className="nav-link " ><i className="bi bi-trophy border rounded-circle px-2 py-1"></i></button>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Your progress
                                </button>
                                <ul className="dropdown-menu">
                                    <li><p className="dropdown-item" >{CompletedCount} of {CountTotalVideos} complete.</p></li>
                                    <li><p className="dropdown-item" >Finish course to get your certificate</p></li>
                                </ul>
                            </li>
                            <li className="nav-item border border-2 px-2 mx-2">
                                <button className="nav-link fw-bold text-light">Share <i className="bi bi-sign-turn-slight-right"></i></button>
                            </li>
                            <li className="nav-item border border-2 mx-2 ">
                                <button className="nav-link text-light" ><i className="bi bi-three-dots-vertical"></i></button>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav >
    )
}

export default NavBar