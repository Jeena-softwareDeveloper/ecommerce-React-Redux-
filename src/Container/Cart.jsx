import React from 'react'
import {useSelector} from 'react-redux'
import Cartlist from '../components/cartlist';
function Cart() {
    const cartselector=useSelector((state)=>state.cart.list);

  return (
    <div>
        { cartselector.map((item)=>
            <Cartlist{...item}/>
            )
        }
       
    </div>
  )
}

export default Cart;