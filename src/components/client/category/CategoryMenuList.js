import { Link } from "react-router-dom";


const CategoryMenuList = ({categories}) => {

    return ( 
        <div className="category-menu-bg poppins-semibold flex items-center gap-10 p-2 justify-center">
            {categories.map((cat) => (
                <div key={cat.idCategory} className=" flex items-center text-white">
                    <Link to={`/categoria/${cat.name.toLowerCase()}`}> {cat.name} </Link>
                </div>
            ))}
        </div>
     );
}
 
export default CategoryMenuList;