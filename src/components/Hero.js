import React from "react"
import ReactDOM from "react-dom"
import Photogrid from "../images/Group 77.png"

export default function Hero() {
    return (
      <section className="hero">
          <img src={Photogrid} alt="" className="hero--photo" />

          <div className="hero--text">
              <h2>Online Experiences</h2>
              <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
          </div>

      </section>
    )
}


ReactDOM.render(<Hero />, document.getElementById("root"))