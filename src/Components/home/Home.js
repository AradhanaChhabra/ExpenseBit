import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div className="bo">
            <nav>
                <div className="divLines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Audit Log</a></li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            </nav>
            
            <section className="landing">
                <h1>Hack Exp</h1>
            </section>
        </div>
    )
}
