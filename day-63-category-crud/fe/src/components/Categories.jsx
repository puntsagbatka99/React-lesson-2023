import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react"

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const URL = "http://localhost:8081/category"

    useEffect(() => {
        fetchCategories();
    }, [])

    async function fetchCategories() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json();
        if (FETCHED_JSON.status === "success") {
            setCategories(FETCHED_JSON.data);
        }
    }

    async function handleCategoryDelete(categoryId) {
        console.log(categoryId)
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                categoryId: categoryId
            })
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON)
        if (FETCHED_JSON.status === "success") {
            setCategories(FETCHED_JSON.data);
            toast(`Category with id = ${categoryId} deleted successfully`)
        }
    }

    async function handleSearchSubmit(e) {
        e.preventDefault();
        const searchInput = e.target.search.value;
        const SEARCH_URL = `http://localhost:8081/search?value=${searchInput}`
        const FETCHED_DATA = await fetch(SEARCH_URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        if (FETCHED_JSON.status === "success") {
            setCategories(FETCHED_JSON.data)
        }
    }
    return (
        <div>
            <h1>Category LIst</h1>
            <form onSubmit={handleSearchSubmit}>
                <label>
                    <input name="search" type="text" />
                    <button type="submit">Search</button>
                </label>
            </form>
            <table>
                <thead>
                    <tr>
                        <td>Category ID</td>
                        <td>Category Name</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories && categories.map((category, index) => {
                            return (
                                <tr key={index}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td><a href={`/category/edit/${category.id}`}><button>Edit</button></a></td>
                                    <td><button onClick={() => {
                                        handleCategoryDelete(category.id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}