import React from "react";
import { useParams } from "react-router";

export default function CharacterDescription() {
    const { id } = useParams()
    const [character, setCharacters] = useState ([]);
    const {store,actions} = useContext

    useEffect(() => {
        async function getCharacters() {
            let response = await fetch("")
            let data = await response.json
            // console.log(data)
            setCharacters(data)
        }

        getCharacters()
        // console.log(character)
    })

}

    return (

        <div>
            <img src=""/>
            <h1>Name;</h1>
            <h6></h6>
            <h1>Love:</h1>
            <h1>Profession</h1>
        </div>
    )