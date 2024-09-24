import { useEffect, useState } from "react";

const useFetchProduct = () => {
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
    
    return  { products, error, loading };
}
 
export default useFetchProduct;