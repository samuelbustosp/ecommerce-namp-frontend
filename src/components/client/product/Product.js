import { FaShoppingBasket } from "react-icons/fa";
const ClientProduct = ({idProduct, name, description, price, stock, img,idSubcategory,}) => {
    return ( 
        <article className="flex flex-col shadow-lg bg-white p-2 mb-4 border border-gray-300 w-full h-76 rounded-lg">
            <div className="mb-2">
                <img 
                    src={`http://localhost:8080${img}`} 
                    alt={name} 
                    className="w-full h-48 object-contain rounded-t-xl" />
               
            </div>
            <div className="flex-grow">
                <header className=" p-2">
                    <h2 className="text-md poppins-semibold">{name}</h2>
                    <span className="font-light text-sm">{idSubcategory.idCategory.name}</span>
                </header>
                <section className="mb-2 p-2">
                    
                    <div class="flex items-center justify-between">
                        <span class="text-xl poppins-bold text-blue-950 dark:text-white">${price}</span>
                        {stock > 0 ? (
                            <a href="#" class="text-white bg-customColorHover hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaShoppingBasket/></a>
                        ) : (
                            <a class="text-gray-500 border border-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center cursor-not-allowed">Sin stock</a>
                        )}
                    </div>
                </section>
                <footer>
                </footer>
            </div>
        </article>
     );
}
 
export default ClientProduct;