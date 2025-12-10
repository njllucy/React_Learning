import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const Product = () => {
    
  return (
    <div>
       <div className='flex justify-evenly font-semibold mt-20'> 
         <Link to='/product/men'>Men's Collection</Link>
         <Link to='/product/women'>Women's Collection</Link>
       </div><br />
      
     <Outlet/>
    </div>
  )
}

export default Product
