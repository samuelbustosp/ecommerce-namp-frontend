import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchProductById = () => {
    const { name } = useParams();
    const [product, setProduct] = useState(null);  // Producto inicializado como null
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsId = async () => {
            setLoading(true);
            try {
                // Primer fetch para obtener la lista de productos
                const response = await fetch('http://localhost:8080/api-namp/product');
                if (!response.ok) {
                    throw new Error('Error al traer los productos');
                }
                const data = await response.json();

                // Encuentra el producto por nombre
                const foundProduct = data.find(prod => prod.name.toLowerCase() === name.toLowerCase());

                if (foundProduct) {
                    // Segundo fetch para obtener los detalles completos del producto usando el idProduct
                    const productResponse = await fetch(`http://localhost:8080/api-namp/product/${foundProduct.idProduct}`);
                    if (!productResponse.ok) {
                        throw new Error('Error al traer los detalles del producto');
                    }

                    const productData = await productResponse.json();
                    setProduct(productData);  // Actualiza el estado con los detalles completos del producto
                } else {
                    throw new Error('Producto no encontrado');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            }
        };

        fetchProductsId();
    }, [name]);

    return { product, error, loading };
};

export default useFetchProductById;

