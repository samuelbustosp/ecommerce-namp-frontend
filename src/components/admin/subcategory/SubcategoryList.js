import { TiDelete } from "react-icons/ti";
import { FaEdit, FaSort } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useState } from "react";

const SubcategoryList = ({ subcategories, deleteSubcategory, onEditSubcategory }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ASC' });

    const handleSort = (columnKey) => {
        let direction = 'ASC';
        if (sortConfig.key === columnKey && sortConfig.direction === 'ASC') {
            direction = 'DESC';
        }
        setSortConfig({ key: columnKey, direction });
    };

    const sortedSubcategories = [...subcategories].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ASC' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ASC' ? 1 : -1;
        }
        return 0;
    });

    const handleClickDelete = (idSubcategory) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSubcategory(idSubcategory);
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'La subcategoría ha sido eliminada.',
                    icon: 'success',
                    confirmButtonColor: '#057a55',
                });
            }
        });
    };
    
    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
                <thead className="bg-white rounded-xl text-left shadow">
                    <tr>
                        <th className="px-4 py-2 border-b text-zinc-800 border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Codigo
                                <button onClick={() => handleSort('idSubcategory')} className="ml-2">
                                    <FaSort className="text-zinc-700" />
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Nombre
                                <button onClick={() => handleSort('name')} className="ml-2">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Descripción
                                <button onClick={() => handleSort('description')} className="ml-2">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Category
                                <button onClick={() => handleSort('description')} className="ml-2">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedSubcategories.map((subcategory, index) => {
                        return (
                            <tr 
                                key={subcategory.idSubcategory} 
                                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                            >
                                <td className="px-4 py-2 border-b border-b-gray-300">
                                    {subcategory.idSubcategory}
                                </td>
                                <td className="px-4 py-2 border-b border-b-gray-300">
                                    {subcategory.name}
                                </td>
                                <td className="px-4 py-2 border-b border-b-gray-300">
                                    {subcategory.description}
                                </td>
                                <td className="px-4 py-2 border-b border-b-gray-300">
                                    {subcategory.idCategory.name}
                                </td>
                                <td className="px-4 py-2 border-b border-b-gray-300">
                                    <div className="flex items-center">
                                        <button 
                                            className="text-green-600 text-2xl hover:text-green-500" 
                                            onClick={() => onEditSubcategory(subcategory)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button 
                                            className="text-red-600 text-3xl hover:text-red-500" 
                                            onClick={() => handleClickDelete(subcategory.idSubcategory)}
                                        > 
                                            <TiDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SubcategoryList;
