
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "../src/data"


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = cardData.map(data => {
        return <Card
            key={data.id}
            {...data}

        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>


    )
}

ReactDOM.render(<App />, document.getElementById("root"));