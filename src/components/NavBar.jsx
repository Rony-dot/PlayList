import React from 'react'
import "../css/navbar.css"

const NavBar = () => {
    return (
        <nav class="navbar navbar-dark navbar-custom mb-1">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h2><i class="bi bi-film text-danger"></i> Video Playlist</h2>
                </a>
            </div>
        </nav >
    )
}

export default NavBar