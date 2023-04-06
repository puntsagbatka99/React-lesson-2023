import exp from "constants";
import mongoose, {Schema} from "mongoose";

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

const MoviesSchema: Schema = new Schema({})

const MoviesModel = mongoose.model<IMovies>("Movies", MoviesSchema)

export default MoviesModel