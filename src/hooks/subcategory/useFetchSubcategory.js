import { useEffect, useState } from "react";

const useFetchSubcategory = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubcategories = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8080/api-namp/subcategory");
                if (!response.ok) {
                    throw new Error('Error al traer las subcategorías');
                }
                const data = await response.json();
                setSubcategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSubcategories();
    }, []);

    return { subcategories, error, loading }; 
}
 
export default useFetchSubcategory;