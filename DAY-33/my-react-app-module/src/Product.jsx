import React from "react"
import image1 from './img/image-yellow.png';
import profile from "./img/profile1.jpg";

class Product extends React.Component {
    render() {
        return (
            <div id="container">
                <img class="image" src={image1} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>55</h4></div>
                    <p id="nameP">Haught or Naught</p>
                    <p id="describeP">High-Minded or absent-minded? You decide.</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
                </div>
            </div>
        )
    }
}

export default Product;