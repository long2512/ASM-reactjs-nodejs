import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { IProduct } from '../types/products'
import ListProducts from './ListProducts'
import NumberFormat from 'react-number-format';

type ProductsListProps = {
  products: IProduct[],
}

const Home = (props: ProductsListProps) => {
  return (
    <div className=" ">
      <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6 py-36">
        <div className="text-center">
          <img
            className="inline pb-3 rounded-full"
            src="https://cdn8.bigcommerce.com/s-jl3t5tg/product_images/uploaded_images/simple-steeper.jpg"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Pottery classNamees
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#B97C5E] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3 rounded-full"
            src="https://cdn8.bigcommerce.com/s-jl3t5tg/product_images/uploaded_images/simple-steeper.jpg"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Design Proces
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3 rounded-full"
            src="https://cdn8.bigcommerce.com/s-jl3t5tg/product_images/uploaded_images/simple-steeper.jpg"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Gift Cards
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3 rounded-full"
            src="https://cdn8.bigcommerce.com/s-jl3t5tg/product_images/uploaded_images/simple-steeper.jpg"
            alt=""
          />

          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Pottery Weel
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
      </div>


      {/* <div className="bg-banner-email pt-[100px] pb-[200px] bg-cover bg-center bg-no-repeat">
        <h1 className="font-medium te text-orange-600 text-5xl text-center pt-20">
          Subscribe Hiland Coffee
        </h1> */}
      {/* <form className="text-center pt-10" action="">
          <input
            type="text"
            name=""
            placeholder="E-mail Adress"
            className="pr-32 pl-3 text-white py-3 bg-transparent border border-inherit outline-0"
          />
          <button className="bg-white text-sm text-black px-10 py-[18px] border bg-white ">
            SUBSCRIBE
          </button>
        </form> */}
      {/* </div> */}

      <div className="">
        <h1 className="font-serif text-6xl text-center pt-36">
          All Products
        </h1><div className="grid grid-cols-4 max-w-6xl mx-auto gap-5">
          {/* ==================== */}
          {props.products.map((item) => {
            return <div className="relative  pt-10 overlay">
              <Link to={`/products/${item._id}`}>
                <div className="relative  product-item  text-center">

                  <div className="info-item ">
                    <img
                      src={`${item.img}`}
                      className="w-full h-full"
                      alt=""
                    />
                  </div>

                  <div className="">
                    <h2 className="text-2xl font-serif pb-2  pt-3">{item.name}</h2>
                    <span> 
                      <NumberFormat className="font-medium text-xl text-[#b97c5e] font-bold text-center"
                        thousandSeparator={true}
                        value={item.price}
                        prefix="Giá: "
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          })}</div>

        {/* =================== */}
      </div>


    </div>
  );
}

export default Home