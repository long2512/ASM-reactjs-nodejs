import React from 'react'
import NumberFormat from 'react-number-format';
import { Link, NavLink } from 'react-router-dom'
import { IProduct } from '../types/products'

type Productsprops = {
  products: IProduct[];
}

const ProductsPage = (props: Productsprops) => {
  return (
    <div>
      <h2 className='text-center text-5xl py-16 font-[600]'>Products Page</h2>
      <div className="container flex mx-auto w-5/6">
        <div className="cate bg-[#ccc]">
          <div className="search p-4 mt-12">
            <form action="" className='flex'>
              <input type="text" placeholder='Search Products ' className='p-2 border-2 rounded-xl outline-none' />
            </form>
            <ul className='mt-12 p-8'>
              <li className='text-2xl font-[600] mb-8'>Danh mục </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="products grid grid-cols-3">
          {
            props.products.map((item) => {
              return <div className=' w-5/6 mx-auto'>

                <div className='products border-2 border-solid p-3 text-center my-8'>
                  <Link to={`/products/${item._id}`}>
                    <img className='hover:scale-105 ease-in-out duration-300 ...' src={`${item.img}`} width='400' alt="" />
                    <h2 className='font-sans font-[600] text-2xl py-3'>{item.name}</h2>
                    <span>
                      <NumberFormat className='font-sans font-bold text-red-600 text-center text-xl py-3'
                        thousandSeparator={true}
                        value={item.price}
                        prefix="Giá: "
                      />
                    </span>
                  </Link>
                  
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsPage