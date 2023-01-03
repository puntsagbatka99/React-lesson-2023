import React from "react"
import image1 from './img/image-rose.png';
import profile from "./img/profile1.jpg";

class Product4 extends React.Component {
    render() {
        return (
            <div id="container">
                <img class="image" src={image1} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>23</h4></div>
                    <p id="nameP">Supermajority: The Fantasy Congress League</p>
                    <p id="describeP">Earn points  when your favorite politicians pass legislation.</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
                </div>
            </div>
        )
    }
}

export default Product4;