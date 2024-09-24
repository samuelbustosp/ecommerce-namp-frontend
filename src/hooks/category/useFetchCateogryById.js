import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchCategoryById = () => {
    const {name} = useParams()
    const [category, setCategory] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchCategoriesId = async () => {
            setLoading(true);
            try{
                const response = await fetch('http://localhost:8080/api-namp/category');
                if (!response.ok){
                    throw new Error('Error al traer las categorías');
                }
                const data = await response.json();
                const foundCategory = data.find(cat => cat.name.toLowerCase() === name.toLowerCase());

                if(foundCategory){
                    const subcategoryResponse = await fetch(`http://localhost:8080/api-namp/categoryWithSubcategories/${foundCategory.idCategory}`);

                    if (!subcategoryResponse.ok) {
                        throw new Error('Error al traer las subcategorías');
                    }

                    const subcategoryData = await subcategoryResponse.json();
                    setCategory(foundCategory);
                    setSubcategories(subcategoryData.subcategoryWithProducts);
                } else {
                    throw new Error('Categoría no encontrada');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(()=>{
                    setLoading(false);
                },800)
            }
        };
        fetchCategoriesId();
    },[name])
    return {category,subcategories,error,loading};
}
 
export default useFetchCategoryById;