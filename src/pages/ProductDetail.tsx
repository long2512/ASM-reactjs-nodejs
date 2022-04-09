import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/products';
import { IProduct } from '../types/products';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';


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
          <img className='hover:scale-105 ease-in-out duration-300 ...' src={`${product?.img}`} alt="" width='350' />
        </div>
        <div className="info mt-[30px]">
          <h2 className='text-3xl font-sans font-bold text-orange-900 p-2'>{product?.name}</h2>
          <h5 > 
          <NumberFormat className='font-sans font-bold text-2xl text-red-900 p-2'
            thousandSeparator={true}
            value={product?.price}
            prefix="Giá: "
           />
          </h5>

          <input className='border border-gray-600 p-3' type="number" placeholder='số lượng' />
          <button className='bg-red-700 p-3 text-white ml-[20px] hover:bg-yellow-600'>Đặt Mua Ngay</button>
          <p className=' font-sans text-amber-800 mt-[20px]'>Thức uống chinh phục những thực khách khó tính! <br />Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail