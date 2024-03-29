import React from "react"
import ReactDOM from "react-dom"

import Cardstar from "../images/Star 1.png"


export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (

        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt="" className="card--image" />
            <div className="card--stats">
                <img src={Cardstar} alt="" className="card--star" />
                <span>{props?.stats?.rating} </span>
                <span className="gray">({props?.stats?.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> <span className="bold"> From ${props.price} /</span> person</p>
        </section>

    )

}

ReactDOM.render(<Card />, document.getElementById("root"))