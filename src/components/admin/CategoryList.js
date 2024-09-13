import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";


const CategoryList = ({categories, deleteCategory, onEditCategory}) => {
    
    return (  
        <div className="overflow-x-auto p-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100 rounded-xl text-left ">
                    <tr>
                        <th className="px-4 py-2 border-b text-zinc-800 border-b-gray-300 poppins-bold">Codigo</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-bold">Nombre</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-bold">Descripción</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-bold">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.idCategory}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.name}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.description}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">
                                <div className="flex items-center">
                                <button 
                                    className="text-green-600 text-2xl" 
                                    onClick={()=>onEditCategory(category)}
                                >
                                    <FaEdit/>
                                </button>
                                <button 
                                    className="text-red-600 text-3xl" 
                                    onClick={()=>deleteCategory(category.idCategory)}
                                >
                                    <TiDelete/>
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
 
export default CategoryList;