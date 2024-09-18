import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import ClientProductList from "./ClientProductList"

const ClientProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // Estado para controlar el modal de error
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/product");
                if (!response.ok) {
                    throw new Error('Error al traer las categorías');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true); // Mostrar modal de error
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
        <div>
            <div className="mb-20"> 
                <ClientProductList products={products}/>
            </div>
        </div>
     );
}
export default ClientProductContainer;