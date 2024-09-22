import { useEffect, useState } from "react";

const useFetchCategory = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return { categories, error, loading }; // Devuelve los valores
};

export default useFetchCategory;
