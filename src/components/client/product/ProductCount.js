import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

const ProductCount = ({stock}) => {
    const [quantity, setQuantity] = useState(0)

    const increment = () =>{
        if(quantity<stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () =>{
        if(quantity>0){
            setQuantity(quantity - 1)
        }
    }
    return ( 
        <div className="ml-4 flex items-center gap-2">
            <button 
                className="rounded-full border p-2 text-gray-800 hover:text-blue-900 hover:border-gray-400 text-sm hover:ring-1 focus:ring-gray-300 hover:ring-gray-200"
                onClick={decrement}
            >
                <TiMinus/>
            </button>
            <p className="text-lg poppins-regular w-4 text-center">{quantity}</p>
            <button 
                className="rounded-full text-sm p-2 text-white bg-blue-800 hover:bg-blue-700 hover:ring-1 hover:ring-blue-500 focus:ring-blue-500"
                onClick={increment}
            >
                <TiPlus/>
            </button>
        </div>
     );
}
 
export default ProductCount;