import React from 'react';
// import image1 from './img/image-yellow.png';
// import profile from "./img/profile1.jpg";
import products from './seed';

function ProductFunc(props) {
    return (
            <div id={props.id} className="container">
                <img className="image" src={props.productImageUrl} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader"><i className="bi bi-caret-up-fill"></i><h4>{props.votes}</h4></div>
                    <p id="nameP">{props.title}</p>
                    <p id="describeP">{props.description}</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={props.submitterAvatarUrl} /> </div>
                </div>
            </div>
    )
}

// function ProductFunc () {
//     return (
//         <div id="container">
//                 <img class="image" src={image1} alt="image" />
//                 <div id="contRightSide">
//                     <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>55</h4></div>
//                     <p id="nameP">Haught or Naught</p>
//                     <p id="describeP">High-Minded or absent-minded? You decide.</p>
//                     <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
//                 </div>
//             </div>
//     )
// }

// function ProductFunc2 (){
//     return (
//         <div id="container">
//                 <img class="image" src={image1} alt="image" />
//                 <div id="contRightSide">
//                     <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>44</h4></div>
//                     <p id="nameP">Yellow Pail</p>
//                     <p id="describeP">On-demand sand castle construction expertise.</p>
//                     <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
//                 </div>
//             </div>
//     )
// }

// function ProductFunc3 () {
//     return(
//         <div id="container">
//                 <img class="image" src={image1} alt="image" />
//                 <div id="contRightSide">
//                     <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>42</h4></div>
//                     <p id="nameP">Tinfoild: Tailored tindoil hats</p>
//                     <p id="describeP">We already have your measurements and shipping address.</p>
//                     <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
//                 </div>
//             </div>
//     )
// }

// function ProductFunc4 (){
//     return(
//         <div id="container">
//                 <img class="image" src={image1} alt="image" />
//                 <div id="contRightSide">
//                     <div id="smallHeader"><i class="bi bi-caret-up-fill"></i><h4>23</h4></div>
//                     <p id="nameP">Supermajority: The Fantasy Congress League</p>
//                     <p id="describeP">Earn points  when your favorite politicians pass legislation.</p>
//                     <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={profile} /> </div>
//                 </div>
//             </div>
//     )
// }
export default ProductFunc;