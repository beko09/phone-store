import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,count,total} = item;
    const {increment,decrement,removeItem} = value;
    return (
      
        <div style={{display:'flex'}} className='md2'>
          <div style={{margin:'auto'}}>
            <img src={img} alt='product' style={{width:'5rem',height:'5rem'}}/>
            
          </div>
          <div style={{margin:'auto'}}>
          <h3> {title}</h3>
            
          </div>
          <div style={{margin:'auto'}}>
          <span className='md3'>price</span><h3> $ {price}</h3>
          </div>
          <div style={{margin:'auto',display:'flex'}}>
            <button onClick={()=>decrement(id)}>-</button>
            <button>{count}</button>
            <button onClick={()=>increment(id)}>+</button>
          </div>
          <div style={{margin:'auto'}}>
          <button onClick={()=>removeItem(id)}>remove</button>
          </div>
          <div style={{margin:'auto'}}>
          <span className='md3'>total</span><h3> {total}</h3>
          </div>
          
        </div>
    )
}
