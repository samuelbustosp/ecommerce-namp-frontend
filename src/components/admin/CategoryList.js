
const CategoryList = (categories) => {
    

    return (  
        <div>
            <ul>
                {categories.map(category => (
                <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default CategoryList;