import Product from "./Product";

const ProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-4 gap-5 w-full mt-8">
            {products.map((prod) => (
                <div key={prod.idProduct} className="h-full flex justify-center">
                    <Product {...prod} />
                </div>
            ))}
        </div>
     );
}

export default ProductList;