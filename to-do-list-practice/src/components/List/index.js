import React from "react";
import ListItem from "../ListItem";

function List({ toDos, onDelete }) {
return (
    <ul>
        {toDos.map(function(todo, index) {
        return (
            <ListItem
            key={index}
                text={todo}
                onDelete={function () {
                    onDelete(index);
                }}
                />
                );
                })}
                </ul>
);
            }


export default List;