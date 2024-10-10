import React from 'react'
import './Relatedproduct.css'
import data_product from '../Assets/data'
import Item from '../item/Item'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>RELATED PRODUCTS</h1>
        <hr />
        <div className="relatedproduct-iems">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })};
        </div>
    </div>
  )
}

export default Relatedproduct