import React, { useState } from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.deltfn(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default Item;
