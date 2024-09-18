import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ErrorModal from "../ErrorModal";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import ProductList from "./ProductList"
import ProductModal from "./ProductModal"

const ProductContainer = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/product");
                if (!response.ok) {
                    throw new Error('Error al obtener las subcategorías');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 800); 
            }
        };
    
        const fetchSubcategories = async () => {
            try {
                const response = await fetch("http://localhost:8080/api-namp/subcategory");
                if (!response.ok) {
                    throw new Error('Error al obtener las subcategorías');
                }
                const data = await response.json();
                setSubcategories(data);
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true);
            }
        };

        fetchProduct();
        fetchSubcategories();
    }, []);
    

    const addProduct = async (product, file) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('product', JSON.stringify(product));
            formData.append('file', file);

            const response = await fetch("http://localhost:8080/api-namp/product", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al agregar la subcategoría');
            }
            const data = await response.json();
            setProducts(prevProducts => [...prevProducts, data]);
            setIsModalOpen(false);
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (id, updatedProduct, file) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('product', JSON.stringify(updatedProduct));
            if (file) {
                formData.append('file', file);
            }
    
            const response = await fetch(`http://localhost:8080/api-namp/product/${id}`, {
                method: "PUT",
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al actualizar la subcategoría');
            }
            const data = await response.json();
            setProducts(prevProducts =>
                prevProducts.map(prod => prod.idProduct === id ? data : prod)
            );
            setIsModalOpen(false); 
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };
    
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            
            const response = await fetch(`http://localhost:8080/api-namp/product/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Error al eliminar la subcategoría');
            }
            setProducts(prevProducts =>
                prevProducts.filter(prod => prod.idProduct !== id)
            );
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };


    const handleAddProductClick = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const editProductHandler = (subcategory) => {
        setEditingProduct(subcategory);
        setIsModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
        setError(null);
    };

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }
    return ( 
        <div className="mb-4">
            <div className="flex justify-between mr-4 mt-4 gap-2">
                <div className="flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre..."
                        className="p-2 ml-4 border border-gray-300 rounded"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}  // Actualizar el término de búsqueda
                    />
                    <FaSearch className="text-lg text-zinc-700 ml-1.5"/>
                </div>
                
                <button
                    onClick={handleAddProductClick}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg p-2 flex items-center"
                >
                    <span><IoMdAdd/></span>
                    Agregar
                </button>
            </div>
            <ProductList
                products={products}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
                addProduct={addProduct}
                onEditProduct={editProductHandler}
            />
            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddProduct={addProduct}
                onUpdateProduct={updateProduct}
                productToEdit={editingProduct}
                subcategories={subcategories}
            />
            <ErrorModal 
                isErrorModalOpen={isErrorModalOpen} closeErrorModal={closeErrorModal} 
                error={error}
            />
        </div>
    );
}
 
export default ProductContainer;