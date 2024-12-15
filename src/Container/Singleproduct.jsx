import React from 'react';
import { useParams } from 'react-router';
import { List } from '../data/ProductList';
import {useDispatch} from 'react-redux'
import { additem } from '../redux/Reducer/Cart';
function Singleproduct() {
  const params = useParams();
  const image = List.find((e) => e.id === parseInt(params.id));
   const cartdispatch=useDispatch();
   const addtocart=()=>{
    cartdispatch(additem(image))
   }
  const imageStyle = {
    borderRadius: '7px',
    height: '400px',
    padding:'30px',
    width: '500px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '20px',
  };

  const detailsStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: image.stock > 0 ? '#007bff' : '#ccc',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: image.stock > 0 ? 'pointer' : 'not-allowed',
  };

  return (
    <div style={containerStyle}>
      <div>
        <img style={imageStyle} src={image.image} alt={image.title} />
      </div>

      <div style={detailsStyle}>
        <h5>{image.name}</h5>
        <h6>{image.price}</h6>
        <h6>{image.category}</h6>
        <p>{image.description}</p>
        <h6>Stock: {image.stock}</h6>
      </div>

      <div>
        {image.stock > 0 ? (
            <div>
          <button style={buttonStyle}>Buy Now</button>
          <button onClick={addtocart} style={buttonStyle}>Add Cart</button>
          </div>
        ) : (
          <button style={buttonStyle} disabled>
            Not Available
          </button>
        )}
      </div>
    </div>
  );
}

export default Singleproduct;
