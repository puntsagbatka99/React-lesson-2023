import { useEffect, useState } from "react"

interface IGenres {
    type: [string],
    required: true
}

interface ICast {
    type: [string],
    required: true
}

interface ILanguages {
    type: [string],
    required: true
}

interface IDirectors {
    type: [string],
    required: true
}

interface IWriters {
    type: [string],
    required: true
}

interface IAward {
    wins: number,
    nominations: number,
    text: string
}

interface IImdb {
    rating: number,
    votes: number,
    id: number
}

interface ICountries {
    type: [string],
    required: true
}

interface ITomatoes{
    viewer: {
        rating: number,
        numReviews: number,
        meter: number
    },
    lastUpdated: Date
}

interface IMovies {
    plot: string,
    genres: IGenres,
    runtime: number,
    rated: string,
    cast: ICast,
    num_mflix_comments: number,
    poster: string,
    title: string,
    fullplot: string,
    languages: ILanguages,
    released: Date,
    directors: IDirectors,
    writers: IWriters,
    awards: IAward,
    lastupdated: Date,
    year: number,
    imdb: IImdb,
    countries: ICountries,
    type: string,
    tomatoes: ITomatoes
}

export default function Movies(): JSX.Element{
    const URL = "http://localhost:8081/movies/list"

    const [ movies, setMovies ] = useState<IMovies[]>([])

    async function fetchMovies(): Promise<void> {
        const fetchdata = await fetch(URL);
        const jsondata = await fetchdata.json()
        console.log(jsondata)
        setMovies(jsondata)
    }

    useEffect(()=> {
        fetchMovies()
    },[])

    const movieMap = () => {
        
    }

    return(
        <div className="flex w-full flex-wrap h-screen">
                {
                    movies.map((movies, index) => 
                    <div  key={index} className="w-1/4 h-1/5">
                        <img src={movies.poster ? movies.poster : "https://m.media-amazon.com/images/M/MV5BMTc5NzAyOTQyNF5BMl5BanBnXkFtZTcwNzQ1MDc4OQ@@._V1_.jpg"} alt="movie-Poster" />
                        <h3>{movies.tomatoes?.viewer?.meter ? movies.tomatoes?.viewer?.meter : 0}%</h3>
                        <h1>{movies.title}</h1>
                    </div>
                    
                    )
                }
                
        </div>
    )
}