import React from 'react'
import Foto from './Foto'
import './Navbar/styles/Foto.css'

const Home = () => {
    return (
        <>

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm">
                    <Foto/>
                </div>
                <div className="col-sm">
                        Acerca de mi
                </div>
        
        </div>
            </div>
        </>
    )
}

export default Home
