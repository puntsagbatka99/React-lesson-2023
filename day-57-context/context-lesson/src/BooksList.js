import Book from "./component/Book";
import Books from "./component/Books";
import { BookContextProvider } from "./contexts/BookContext";

export default function BooksList() {
    return (
        <div>
            <BookContextProvider>
                <Books />
            </BookContextProvider>
        </div>
    )
}