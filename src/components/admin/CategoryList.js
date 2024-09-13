import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

const CategoryList = ({categories, updateCategory, deleteCategory, addCategory}) => {

    return (  
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100 rounded-xl">
                    <tr>
                        <th className="px-4 py-2 border border-gray-200">Codigo</th>
                        <th className="px-4 py-2 border border-gray-200">Nombre</th>
                        <th className="px-4 py-2 border border-gray-200">Descripción</th>
                        <th className="px-4 py-2 border border-gray-200">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td className="px-4 py-2 border border-gray-200">{category.idCategory}</td>
                            <td className="px-4 py-2 border border-gray-200">{category.name}</td>
                            <td className="px-4 py-2 border border-gray-200">{category.description}</td>
                            <td className="px-4 py-2 border border-gray-200 flex items-center">
                                <button 
                                    className="text-green-600 text-2xl" 
                                    onClick={()=>updateCategory(category.idCategory,category)}
                                >
                                    <FaEdit/>
                                </button>
                                <button 
                                    className="text-red-600 text-3xl" 
                                    onClick={()=>deleteCategory(category.idCategory)}
                                >
                                    <TiDelete/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default CategoryList;