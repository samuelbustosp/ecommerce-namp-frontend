import { useEffect, useMemo } from "react";
import { useState } from "react";
import CategoryMenuList from "./CategoryMenuList";
import { Spinner } from "flowbite-react";

const CategoryMenu = ({isMenuOpen}) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchCategories = async () => {
            setLoading(true);
            try{
                const response = await fetch("http://localhost:8080/api-namp/category");
                if (!response.ok){
                    throw new Error('Error al traer las categorías');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(()=>{
                    setLoading(false);
                },800)
            }
        };
        fetchCategories();
    },[]);

    const sortedCategories = useMemo(() => 
        categories
            .sort((a, b) => a.name.localeCompare(b.name)) 
    , [categories]);

    if (!isMenuOpen) return null;

    if (loading) {
        return (
            <div className="bottom-1/2 flex justify-center items-center h-80">
                <Spinner size="lg" />
            </div>
        )
    }
    

    return (  
        <div>
            <CategoryMenuList categories={sortedCategories}/>
        </div>
    );
}
 
export default CategoryMenu;