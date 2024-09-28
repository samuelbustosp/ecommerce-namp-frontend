import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ErrorModal from "../ErrorModal";
import { FaSearch } from "react-icons/fa";
import SubcategoryList from "./SubcategoryList";
import AddSubcategoryModal from "./AddSubcategoryModal";
import { Spinner } from "flowbite-react";


const SubcategoryContainer = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSubcategory, setEditingSubcategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:8080/api-namp/category");
                if (!response.ok) {
                    throw new Error('Error al obtener las categorías');
                }
                const data = await response.json();
                setCategories(data); 
            } catch (error) {
                setError(error.message);
                setIsErrorModalOpen(true);
            }
        };
    
        fetchSubcategories();
        fetchCategories();
    }, []);
    
    const fetchSubcategories = async () => {
        setLoading(true);
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
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 800); 
        }
    };

    const addSubcategory = async (newSubcategory) => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/api-namp/subcategory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newSubcategory)
            });
            if (!response.ok) {
                const errorText = await response.text();

                let errorMessage;
                if (errorText.includes("messageTemplate=")) {
                    errorMessage = extractMessageTemplate(errorText);
                } else {
                    errorMessage = errorText; // Es un mensaje de error simple
                }

                throw new Error(errorMessage || 'Error al agregar la subcategoría');
            }
            
            await fetchSubcategories();
            setIsModalOpen(false);
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const updateSubcategory = async (id, updateSubcategory) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api-namp/subcategory/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateSubcategory)
            });
            if (!response.ok) {
                const errorText = await response.text();

                // Verificamos si el mensaje contiene el formato de 'messageTemplate'
                let errorMessage;
                if (errorText.includes("messageTemplate=")) {
                    errorMessage = extractMessageTemplate(errorText);
                } else {
                    errorMessage = errorText; // Es un mensaje de error simple
                }

                throw new Error(errorMessage || 'Error al actualizar la subcategoría');
            }
            
            await fetchSubcategories();
            setIsModalOpen(false); 
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    const deleteSubcategory = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api-namp/subcategory/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Error al eliminar la subcategoría');
            }

            await fetchSubcategories();
        } catch (error) {
            setError(error.message);
            setIsErrorModalOpen(true); 
        } finally {
            setLoading(false);
        }
    };

    // Función para extraer el `messageTemplate` del texto de error
    const extractMessageTemplate = (errorText) => {
        // Expresión regular para extraer el contenido del `messageTemplate`
        const regex = /messageTemplate='([^']+)'/;
        const match = errorText.match(regex);
        return match ? match[1] : null;
    };

    const handleAddSubcategoryClick = () => {
        setEditingSubcategory(null);
        setIsModalOpen(true);
    };

    const editSubcategoryHandler = (category) => {
        setEditingSubcategory(category);
        setIsModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
        setError(null);
    };

    const filteredSubcategories = subcategories.filter(subcategory =>
        subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <FaSearch className="text-lg text-zinc-700 ml-1.5"/>
                </div>
                
                <button
                    onClick={handleAddSubcategoryClick}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg p-2 flex items-center"
                >
                    <span><IoMdAdd/></span>
                    Agregar
                </button>
            </div>
            <SubcategoryList
                subcategories={filteredSubcategories}
                updateSubcategory={updateSubcategory}
                deleteSubcategory={deleteSubcategory}
                addSubcategory={addSubcategory}
                onEditSubcategory={editSubcategoryHandler}
            />
            <AddSubcategoryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddSubcategory={addSubcategory}
                onUpdateSubcategory={updateSubcategory}
                subcategoryToEdit={editingSubcategory}
                categories={categories}
            />
            <ErrorModal 
                isErrorModalOpen={isErrorModalOpen} closeErrorModal={closeErrorModal} 
                error={error}
            />
        </div>
    );
}
 
export default SubcategoryContainer;