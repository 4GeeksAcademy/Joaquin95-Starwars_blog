import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function CharacterCard() {
    const [character, setCharacters] = useState ([]);
    const {store,actions} = useContext

    useEffect(() => {
        async function getCharacters() {
            let response = await fetch("")
            let data = await response.json
            console.log
        }

        getCharacters()
    })

    const handleFavoroites = (e, name) =>{
 e.preventDefault()
 if(store.favs.includes(name)) {
    actions.removeFavs(name)
    // if item is already favorite remove it
 }
 else{
    actions.addFave(name)
    }
}

    return( 

        <div className="card" style={"width: 18rem;"}>
             {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={"/character/${character._Id}} href="#" class="btn btn-primary">Go somewhere</Link>
                <span onClick={(e) => handleFavoroites}>Emoji heart</span>
        </div>
</div>
    )
}