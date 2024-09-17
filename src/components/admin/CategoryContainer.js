import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import AddCategoryModal from "./AddCategoryModal";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react'; // Modal de Flowbite
import { IoMdAdd } from "react-icons/io";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import ErrorModal from "./ErrorModal";
import { FaSearch } from "react-icons/fa";
import { BsCursorText } from "react-icons/bs";

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // Estado para controlar el modal de error
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/category");
                if (!response.ok) {
                    throw new Error('Error al traer las categorías');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true); // Mostrar modal de error
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const addCategory = async (newCategory) => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/api-namp/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCategory)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al agregar la categoría');
            }
            const data = await response.json();
            setCategories(prevCategories => [...prevCategories, data]);
            setIsModalOpen(false);
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const updateCategory = async (id, updateCategory) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api-namp/category/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateCategory)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Error al actualizar la categoría');
            }
            const data = await response.json();
            setCategories(prevCategories =>
                prevCategories.map(cat => cat.idCategory === id ? data : cat)
            );
            setIsModalOpen(false); 
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const deleteCategory = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api-namp/category/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Error al eliminar la categoría');
            }
            setCategories(prevCategories =>
                prevCategories.filter(cat => cat.idCategory !== id)
            );
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const handleAddCategoryClick = () => {
        setEditingCategory(null);
        setIsModalOpen(true);
    };

    const editCategoryHandler = (category) => {
        setEditingCategory(category);
        setIsModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
        setError(null);
    };

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p>Loading...</p>;
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
                    onClick={handleAddCategoryClick}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg p-2 flex items-center"
                >
                    <span><IoMdAdd/></span>
                    Agregar
                </button>
            </div>
            <CategoryList
                categories={filteredCategories}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
                addCategory={addCategory}
                onEditCategory={editCategoryHandler}
            />
            <AddCategoryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddCategory={addCategory}
                onUpdateCategory={updateCategory}
                categoryToEdit={editingCategory}
            />
            <ErrorModal 
                isErrorModalOpen={isErrorModalOpen} closeErrorModal={closeErrorModal} 
                error={error}
            />
        </div>
    );
};

export default CategoryContainer;
