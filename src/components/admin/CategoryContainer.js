import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import AddCategoryModal from "./AddCategoryModal";
import { IoMdAdd } from "react-icons/io";

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);

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
        } catch (error) {
            throw error;
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
        } catch (error) {
            setError(error.message);
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <div className="flex justify-end mr-4 mt-4">
                <button
                    onClick={handleAddCategoryClick}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-2 py-2 flex items-center"
                >
                    <span><IoMdAdd/></span>
                    Agregar
                </button>
            </div>
            <CategoryList
                categories={categories}
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
        </div>
    );
};

export default CategoryContainer;

