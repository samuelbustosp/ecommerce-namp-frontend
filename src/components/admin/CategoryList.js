import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";


const CategoryList = ({categories, deleteCategory, onEditCategory}) => {
    
    return (  
        <div className="overflow-x-auto p-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
                <thead className="bg-white rounded-xl text-left shadow">
                    <tr>
                        <th className="px-4 py-2 border-b text-zinc-800 border-b-gray-300 poppins-semibold">Codigo</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">Nombre</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">Descripción</th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr 
                            key={category.id} 
                            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}  // Alterna entre gris claro y blanco
                        >
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.idCategory}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.name}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{category.description}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">
                                <div className="flex items-center">
                                <button 
                                    className="text-green-600 text-2xl hover:text-green-500" 
                                    onClick={()=>onEditCategory(category)}
                                >
                                    <FaEdit/>
                                </button>
                                <button 
                                    className="text-red-600 text-3xl hover:text-red-500" 
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