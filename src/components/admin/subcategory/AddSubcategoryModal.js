import { Modal, ModalHeader, ModalBody, ModalFooter, Button, TextInput, Select } from 'flowbite-react';
import { useState, useEffect, useMemo } from 'react';

const AddSubcategoryModal = ({ isOpen, onClose, onAddSubcategory, onUpdateSubcategory, subcategoryToEdit, categories = [] }) => {
    const [subcategory, setSubcategory] = useState({ name: '', description: '', idCategory: null });
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (subcategoryToEdit) {
            setSubcategory({
                name: subcategoryToEdit.name,
                description: subcategoryToEdit.description,
                idCategory: subcategoryToEdit.idCategory
            });
            setSelectedCategory(categories.find(c => c.idCategory === subcategoryToEdit.idCategory));
        } else {
            setSubcategory({ name: '', description: '', idCategory: null });
            setSelectedCategory(null);
        }
    }, [subcategoryToEdit, categories]);

    const filteredOptions = useMemo(() => 
        categories
            .filter(option => 
                option.name.toLowerCase().includes(query.toLowerCase())
            )
            .sort((a, b) => a.name.localeCompare(b.name)), // Ordena de forma ascendente
        [query, categories]
    );
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubcategory(prev => ({ ...prev, [name]: value }));
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = parseInt(e.target.value, 10);
        const category = categories.find(c => c.idCategory === selectedCategoryId);
        setSelectedCategory(category);
        setSubcategory(prev => ({ ...prev, idCategory: selectedCategoryId }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Crear el objeto SubcategoryToSend
            const subcategoryToSend = {
                name: subcategory.name,
                description: subcategory.description,
                idCategory: selectedCategory // Enviar el objeto completo
            };
    
            if (subcategoryToEdit) {
                await onUpdateSubcategory(subcategoryToEdit.idSubcategory, subcategoryToSend);
            } else {
                await onAddSubcategory(subcategoryToSend);
            }
            onClose();
        } catch (error) {
            
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose}>
            <ModalHeader>
                <p className='poppins-bold text-2xl'>{subcategoryToEdit ? 'Editar Subcategoría' : 'Agregar Subcategoría'}</p>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <TextInput
                            id="name"
                            name="name"
                            value={subcategory.name}
                            onChange={handleInputChange}
                            placeholder="Ingrese el nombre de la subcategoría."
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                        <TextInput
                            id="description"
                            name="description"
                            value={subcategory.description}
                            onChange={handleInputChange}
                            placeholder="Ingrese la descripción de la subcategoría."
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">Categoría</label>
                        <Select
                            id="dropdown"
                            value={selectedCategory ? selectedCategory.idCategory : ''}
                            onChange={handleCategoryChange}
                        >
                            {filteredOptions.map((category) => (
                                <option key={category.idCategory} value={category.idCategory}>
                                    {category.name}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <ModalFooter className='flex items-center justify-end'>
                        <Button color="gray" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button color="blue" type="submit">
                            {subcategoryToEdit ? 'Actualizar' : 'Agregar'}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default AddSubcategoryModal;
