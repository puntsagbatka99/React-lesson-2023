import React from "react"
import image1 from './img/image-aqua.png';
import profile from "./img/profile1.jpg";

class Product2 extends React.Component {
    render() {
        return (
            <div id="container">
                <img class="image" src={image1} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>44</h4></div>
                    <p id="nameP">Yellow Pail</p>
                    <p id="describeP">On-demand sand castle construction expertise.</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
                </div>
            </div>
        )
    }
}

export default Product2;