import { useEffect, useState } from "react"

interface IGeo {
    type: {
        type: string,
        enum: ["Point"],
        required: true
    },
    coordinates: {
        type: [number, number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string
}

interface ILocation{
    address: IAddress,
    geo: IGeo
}

interface ITheater {
    theaterId: number,
    location: ILocation
}

export default function Movies (): JSX.Element{
    const URL = `http://localhost:8081/theater/list`

    const [ theathers, setTheaters ] = useState<ITheater[]>([])

    async function fetchTheaters (): Promise<void> {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        setTheaters(FETCHED_JSON)
    }

    useEffect(() => {
        fetchTheaters()
    }, [])

    return(
        <div>
            <h1>Movies</h1>
            <ul>
                {
                    theathers.map((movies, index) => 
                        <li key={index}>{movies.theaterId},{movies.location.address.city}</li>
                    )
                }
            </ul>
        </div>
    )
}