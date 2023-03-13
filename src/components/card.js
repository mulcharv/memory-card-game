import React from "react";

function Cards (props) {

    function onSelection(e) {
        let chosencard = e.currentTarget.id;
        props.onClick(chosencard)
    }

return (
    <button className="card" type="button" id={props.value} onClick={onSelection}><img src={require(`../assets/images/${props.value}.png`)} className="cardimg" alt=""></img></button>
)

}

export default Cards