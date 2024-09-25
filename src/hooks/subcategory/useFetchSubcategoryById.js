import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchSubcategoryById = () => {
    const {name} = useParams()
    const [subcategory, setSubcategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchSubcategoriesId = async () => {
            setLoading(true);
            try{
                const response = await fetch('http://localhost:8080/api-namp/subcategory');
                if (!response.ok){
                    throw new Error('Error al traer las subcategorías');
                }
                const data = await response.json();
                const foundSubcategory = data.find(subcat => subcat.name.toLowerCase() === name.toLowerCase());

                if(foundSubcategory){
                    const productResponse = await fetch(`http://localhost:8080/api-namp/subcategoryWithProducts/${foundSubcategory.idSubcategory}`);

                    

                    if (!productResponse.ok) {
                        throw new Error('Error al traer los productos');
                    }

                    const productData = await productResponse.json();

                    console.log("ProductResponse", productData);


                    setSubcategory(foundSubcategory);
                    setProducts(productData.products);
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
        fetchSubcategoriesId();
    },[name])
    return {subcategory,products,error,loading};
}
 
export default useFetchSubcategoryById;