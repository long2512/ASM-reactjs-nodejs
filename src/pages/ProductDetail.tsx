import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/products';
import { IProduct } from '../types/products';
import { NavLink } from 'react-router-dom';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data)
    }
    getProduct();
  }, [id])
  return (
    // nullish : kiểm tra nếu product có dữ liệu thì cho phép truy cập vào thuộc tính name
    // ngược lại thì default null
    <div className="container flex w-5/6 mx-auto">
      <div className='flex w-5/6 p-12 mx-auto gap-8'>
        <div className="img">
          <img src={`${product?.img}`} alt="" width='350' />
        </div>
        <div className="info">
          <h2 className='text-3xl '>{product?.name}</h2>
          <h5>{product?.price}</h5>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail