import ClientProduct from "./ClientProduct";

const ClientProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((prod) => (
                <div key={prod.idProduct} className="flex justify-center">
                    <ClientProduct {...prod} />
                </div>
            ))}
        </div>
     );
}
 
export default ClientProductList;