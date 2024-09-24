import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { TbShoppingBagPlus, TbShoppingBagSearch  } from "react-icons/tb";
import ProductCount from "./ProductCount";
import Breadcrumb from "../Breadcrumb";
import { MdLocalShipping } from "react-icons/md";

const ProductDetail = ({idProduct,name,description,stock,img,price,idSubcategory}) => {
    const paths = [
        { name: "Inicio", to: '/home' },
        { 
            name: idSubcategory.idCategory.name.charAt(0).toUpperCase() + idSubcategory.idCategory.name.slice(1).toLowerCase(),
            to: `/categoria/${idSubcategory.idCategory.name.toLowerCase()}`
        },
        { 
            name: idSubcategory.name.charAt(0).toUpperCase() + idSubcategory.name.slice(1).toLowerCase(),
            to: `/subcategoria/${idSubcategory.name.toLowerCase()}`
        }
    ];
    return ( 
        <div className="bg-white container rounded-xl shadow-lg">
            <div className="m-2 flex items-center justify-between">
                <Breadcrumb paths={paths} />
            </div>
            <div className="flex justify-between my-8 items-center">
                
                <div className="w-2/5 justify-center flex ml-auto mr-auto transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <img
                        src={`http://localhost:8080${img}`}
                        alt={name}
                        className="w-full h-auto object-contain rounded-t-xl"
                    />
                </div>
                <div className="border rounded-2xl w-1/3 text-left py-4 shadow-lg mr-6">
                    <h1 className="poppins-bold text-2xl ml-4 text-gray-800">{name}</h1>
                    <p className="poppins-light text-lg ml-4 mb-2">
                    <Link 
                        to={`/categoria/${idSubcategory.idCategory.name.toLowerCase()}`}
                        className="hover:text-blue-700"
                    >
                        {idSubcategory.idCategory.name}
                    </Link></p>
                    <p className="poppins-light text-md ml-4">{description}</p>
                    <div className="min-h-[2px] ml-4 mb-12 ">
                        {price > 30000 ? ( 
                            <p className="text-sm text-green-800 flex items-center font-semibold gap-1">
                                <MdLocalShipping/>
                                Envío gratis
                            </p>
                        ):( 
                            <p>&nbsp;</p>
                        )}
                    </div>
                    <h1 className="poppins-semibold text-4xl ml-4 mb-8 text-blue-900">${price}
                        <span className="ml-1 text-xl ">ARS</span>
                    </h1>
                    
                    {stock > 0 ? 
                        (
                            <p className="poppins-light ml-4 mb-4">Stock disponible</p>
                        ):(
                            <p className="poppins-light ml-4">Sin stock</p>
                        )
                    }
                    <div className="flex items-center ml-4 mb-8">
                        <p className="poppins-light text-sm">Cantidad:</p><ProductCount stock={stock}/>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button className="ml-4 p-2 rounded-full bg-blue-800 poppins-semibold text-sm text-white flex items-center gap-1">
                            <span className="text-xl"><TbShoppingBagPlus/></span> Agregar al carrito
                        </button>
                        <button className="mr-4 p-2 rounded-lg bg-blue-100 poppins-semibold text-sm text-blue-800 flex items-center gap-1">
                        <span className="text-xl"><TbShoppingBagSearch/></span> Seguir comprando
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div> 
    );
}
 
export default ProductDetail;