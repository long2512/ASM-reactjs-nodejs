import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../types/products';
import { useNavigate } from 'react-router-dom';
import { TCate } from '../types/cate';
type ProductAddProps = {
    onAdd: (product: IProduct) => void
    categories: TCate[];
}
type TInputs = {
    name: String,
    price: number,
    img:String,
    category:string
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<TInputs> = (data: IProduct) => {
        props.onAdd(data)
        Navigate('/admin/products')
    }

    
    return (
        <div>
            <h2 className='text-2xl font-[600] py-5 ml-[20px]'>Thêm Sản Phẩm</h2>
            <form className=" mt-8 space-y-6 w-3/5 ml-[20px]"onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label className="sr-only">Tên sản phẩm</label>
                        <input type="text" className="p-2 mb-3 mt-[20px] border border-gray-600 w-2/3" placeholder="Tên sản phẩm" {...register('name',{required:true})} />
                    </div>
                    <div>
                        <label className="sr-only">Ảnh sản phẩm</label>
                        <input type="text" className="p-2 mb-3 mt-[20px] border border-gray-600 w-2/3" placeholder="Ảnh sản phẩm (url)" {...register('img',{required:true})} />
                    </div>
                    <div>
                       <select className='p-2 mb-3 mt-[20px] border border-gray-600 w-2/3'{...register('category')}>
                           {props.categories.map((item)=>{
                               return <option  value={`${item._id}`} key={item._id}>{item.name}</option>
                           })}
                       </select>
                    </div>
                    <div>
                        <label className="sr-only">Giá sản phẩm</label>
                        <input type="number" className="p-2 mb-3 mt-[20px] border border-gray-600 w-2/3" placeholder="Giá sản phẩm" {...register('price',{required:true})}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-blue-600 p-3 text-white w-2/3">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd;

