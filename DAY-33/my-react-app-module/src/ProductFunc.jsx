import React from 'react';
import { useState } from 'react';
import products from './seed';
import {Rating} from "react-simple-star-rating"

function ProductFunc(props) {

    const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.stars)

    function handleDownVote(props){
        setVotes(votes - 1)
        setStars(stars - 1)

        if(stars <= 0){
            setStars(5)
        } else{
            setStars(stars - 1)
        }
    }

    function handleUpVote(props){
        setVotes(votes + 1)
        setStars(stars + 1)
        if(stars >= 5){
            setStars(0)
        } else{
            setStars(stars + 1)
        }
   

        // const foundStars = products.map(product =>{
        //     if(product.stars < 5){
        //         product.stars = 0;
        //     }
        //     return product
        // })
        // console.log(foundStars)
        // const foundProduct = products.map(product =>{
        //     if(product.id == props.id){
        //         product.votes = product.votes + 1;
        //     }
        //     return product
        // })
        // console.log(foundProduct)        
    }
    return (
            <div id={props.id} className="container">
                <img className="image" src={props.productImageUrl} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader">
                        <div>
                            <a href="#" onClick={() => {handleUpVote(props)}}><i className="bi bi-caret-up-fill"></i></a>
                            <a href="#" onClick={() => {handleDownVote(props)}}><i class="bi bi-caret-down-fill"></i></a>
                        </div>
                        <h4>{votes}</h4>
                    </div>
                    <p id="nameP">{props.title}</p>
                    <p id="describeP">{props.description}</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={props.submitterAvatarUrl} /> </div>
                    <Rating
                        initialValue={stars}
                    />
                </div>
            </div>
    )
}
export default ProductFunc;