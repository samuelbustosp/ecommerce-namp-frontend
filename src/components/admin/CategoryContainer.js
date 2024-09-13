import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para manejar el loading

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true); // Mostrar loading al empezar a cargar datos
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
                setLoading(false); // Ocultar loading después de la carga
            }
        };
        fetchCategories();
    }, []);

    const addCategory = async (newCategory) => {
        setLoading(true); // Mostrar loading al agregar una categoría
        try {
            const response = await fetch("http://localhost:8080/api-namp/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCategory)
            });
            if (!response.ok) {
                throw new Error('Error al agregar la categoría');
            }
            const data = await response.json();
            setCategories(prevCategories => [...prevCategories, data]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Ocultar loading después de la operación
        }
    };

    const updateCategory = async (id, updateCategory) => {
        setLoading(true); // Mostrar loading al actualizar una categoría
        try {
            const response = await fetch(`http://localhost:8080/api-namp/category/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateCategory)
            });
            if (!response.ok) {
                throw new Error('Error al actualizar la categoría');
            }
            const data = await response.json();
            setCategories(prevCategories =>
                prevCategories.map(cat => cat.id === id ? data : cat)
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Ocultar loading después de la operación
        }
    };

    const deleteCategory = async (id) => {
        setLoading(true); // Mostrar loading al eliminar una categoría
        try {
            const response = await fetch(`http://localhost:8080/api-namp/category/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Error al eliminar la categoría');
            }
            setCategories(prevCategories =>
                prevCategories.filter(cat => cat.id !== id)
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Ocultar loading después de la operación
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Mensaje de loading
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <CategoryList
                categories={categories}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
                addCategory={addCategory}
            />
        </div>
    );
};

export default CategoryContainer;
