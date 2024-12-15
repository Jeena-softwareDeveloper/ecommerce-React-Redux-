import React from 'react'
import { useNavigate } from 'react-router'

function ProductCard(image) {
    const navigate = useNavigate()
  return (
    <div role='button' onClick={()=>navigate(`/Singleproduct/${image.id}`)}>
   <div>
    <img style={{borderRadius:7}} src={image.image} height={180} width={150} alt={image.title}/>
   </div>

   <div style={{alignItems:'center', justifyContent:'space-evenly'}}>
    <h5>{image.name}</h5>
    <h6>{image.price}</h6>
    <h6>{image.category}</h6>
    <h6>Stock:{image.stock}</h6>
   </div>
  <div>
    {image.stock >0 ? <button>Buy Now</button>:<button>not Availble</button>}
  </div>
  
    </div>
  )
}

export default ProductCard