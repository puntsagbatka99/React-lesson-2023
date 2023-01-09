import React from 'react';

function ProductFunc(props) {
    function handleUpVote(props){
        console.log("upvoted")
        console.log(props.id)
    }
    return (
            <div id={props.id} className="container">
                <img className="image" src={props.productImageUrl} alt="image" />
                <div id="contRightSide">
                    <div id="smallHeader">
                        <a href="#" onClick={() => {handleUpVote(props)}}><i className="bi bi-caret-up-fill"></i></a>
                        <h4>{props.votes}</h4>
                    </div>
                    <p id="nameP">{props.title}</p>
                    <p id="describeP">{props.description}</p>
                    <div id="submit"><p id="submitP">Submitted by:</p> <img id="profile" src={props.submitterAvatarUrl} /> </div>
                </div>
            </div>
    )
}
export default ProductFunc;