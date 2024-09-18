import { TiDelete } from "react-icons/ti";
import { FaEdit, FaSort } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useState } from "react";



const ProductList = ({products, deleteProduct, onEditProduct}) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ASC' });

    const handleSort = (columnKey) => {
        let direction = 'ASC';
        if (sortConfig.key === columnKey && sortConfig.direction === 'ASC') {
            direction = 'DESC';
        }
        setSortConfig({ key: columnKey, direction });
    };

    const sortedProducts = [...products].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ASC' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ASC' ? 1 : -1;
        }
        return 0;
    });

    const handleClickDelete = (idProduct) => {
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
                deleteProduct(idProduct);  // Llama a la función de eliminación si se confirma
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'El producto ha sido eliminada.',
                    icon: 'success',
                    confirmButtonColor: '#057a55',
                });
            }
        });
    }
    
    return (  
        <div className="overflow-x-auto p-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
                <thead className="bg-white rounded-xl text-left shadow">
                    <tr>
                        <th className="px-4 py-2 border-b text-zinc-800 border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Imagen
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b text-zinc-800 border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Codigo
                                <button onClick={() => handleSort('idProduct')} className="ml-2 ">
                                    <FaSort className="text-zinc-700" />
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Nombre
                                <button onClick={() => handleSort('name')} className="ml-2 ">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Descripción
                                <button onClick={() => handleSort('description')} className="ml-2 ">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">
                            <div className="flex items-center">
                                Subcategoria
                                <button onClick={() => handleSort('idSubcategory')} className="ml-2 ">
                                    <FaSort className="text-zinc-700"/>
                                </button>
                            </div>
                        </th>
                        <th className="px-4 py-2 border-b border-b-gray-300 poppins-semibold">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map((product, index) => (
                        <tr 
                            key={product.id} 
                            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}  // Alterna entre gris claro y blanco
                        >
                            <td className="px-4 py-2 border-b border-b-gray-300">
                                <img src={`${process.env.REACT_APP_IMAGES_URL}${product.img}`} 
                                    alt={product.name} 
                                    className="w-12 h-12 object-cover" 
                                />
                            </td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{product.idProduct}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{product.name}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{product.description}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">{product.idSubcategory.name}</td>
                            <td className="px-4 py-2 border-b border-b-gray-300">
                                <div className="flex items-center">
                                    <button 
                                        className="text-green-600 text-2xl hover:text-green-500" 
                                        onClick={()=>onEditProduct(product)}
                                    >
                                        <FaEdit/>
                                    </button>
                                    <button 
                                        className="text-red-600 text-3xl hover:text-red-500" 
                                        onClick={()=>handleClickDelete(product.idProduct)}
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
 
export default ProductList;