import ClientProduct from "./ClientProduct";

const ClientProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((prod) => (
                <div key={prod.idProduct} className="flex items-center ">
                    <ClientProduct {...prod} />
                </div>
            ))}
        </div>
     );
}
 
export default ClientProductList;