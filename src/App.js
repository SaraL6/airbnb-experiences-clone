
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>


    )
}

ReactDOM.render(<App />, document.getElementById("root"));