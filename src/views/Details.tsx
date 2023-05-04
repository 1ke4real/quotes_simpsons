import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.tsx";
const Details = ()=>{
    const [quotes, setQuotes] = useState([])
    useEffect( ()=>{
        const getQuotes = async () =>{
            const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
            const data = response.data
            setQuotes(data)
        }
        getQuotes()
    }, [])
    return(
        <>
            <h1 className="font-bold text-9xl text-yellow-400 text-center stroke p-5">Details</h1>
            <div className="flex flex-wrap  justify-center ">
                {quotes.map((quote:object)=>(
                    <div className="m-5 w-[30%]">
                        <Card {...quote}/>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Details