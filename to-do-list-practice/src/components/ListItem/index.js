import React from "react";

function ListItem({text, onDelete }) {
    return (
        <li>
            {text}<button onClick={onDelete}>X</button>
        </li>
    )
};





export default ListItem;