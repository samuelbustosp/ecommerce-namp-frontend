const CategoryMenuList = ({categories}) => {
    return ( 
        <div className="bg-side flex items-center gap-10 p-2 justify-center">
            {categories.map((cat) => (
                <div key={cat.idCategory} className=" flex items-center text-white">
                    {cat.name}
                </div>
            ))}
        </div>
     );
}
 
export default CategoryMenuList;