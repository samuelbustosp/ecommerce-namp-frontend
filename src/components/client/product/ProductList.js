import { Link } from "react-router-dom";
import Product from "./Product";


const ProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-4 gap-5 w-full mt-8">
            {products.map((prod) => (
                <Link to={`/producto/${prod.name.toLowerCase()}`} key={prod.idProduct} className="h-full flex justify-center">
                    <Product {...prod} />
                </Link>
            ))}
        </div>
     );
}

export default ProductList;