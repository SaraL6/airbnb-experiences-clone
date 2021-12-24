import React from "react"
import ReactDOM from "react-dom"
import Airbnblogo from "../images/airbnb 1.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Airbnblogo} alt="" className="nav--img" />
        </nav>
    )
}


ReactDOM.render(<Navbar />, document.getElementById("root"))