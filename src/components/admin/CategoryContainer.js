import CategoryList from "./CategoryList";

const CategoryContainer = () => {
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/category")
            .then(response => {
                if(!response.ok){
                    throw new Error('Error al traer las categorías');
                }
                return response.json();
            })
            .then(data =>{
                setCategories(data);
            })
            .catch(error=>{
                setError(error.message)
            });
            
    }, []);
    
    if (error) {
        return <p>{error}</p>;  
    }

    return ( 
        <div>
            <CategoryList categories={categories}/>
        </div>
     );
}
 
export default CategoryContainer;