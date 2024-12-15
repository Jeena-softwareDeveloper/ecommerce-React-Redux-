import React from "react";

function Cartlist(image) {
  return (
    <div>
      <div style={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <img src={image.image} />
        <h5>{image.name}</h5>
        <h6>{image.price}</h6>
        <h6>{image.category}</h6>
      </div>
    </div>
  );
}

export default Cartlist;
