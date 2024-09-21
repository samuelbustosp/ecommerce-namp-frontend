import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import ProductList from "./ProductList"

const ClientProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/product");
                if (!response.ok) {
                    throw new Error('Error al traer los productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(()=>{
                    setLoading(false);
                },800)
                
            }
        };
        fetchProducts();
    }, []);


    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }
    
    return ( 
        
        <div className="mb-20 flex items-center justify-center container"> 
            <ProductList products={products}/>
        </div>
       
     );
}
export default ClientProductContainer;