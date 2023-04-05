import React from "react";

export async function getStaticProps() {
    return{
        props: {
            theater: "test"
        },
        revalidate: 600 
    }
}

export default function About(props: any): JSX.Element {
    return(
        <div>
            <h1>Its About Page</h1>
            <div>
                <p>Theater Name: {props.theater}</p>
            </div>
        </div>
    )
}