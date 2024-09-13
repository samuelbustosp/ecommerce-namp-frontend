import { Modal, ModalHeader, ModalBody, ModalFooter, Button, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from "react";

const AddCategoryModal = ({ isOpen, onClose, onAddCategory, onUpdateCategory, categoryToEdit }) => {
    const [category, setCategory] = useState({ name: '', description: '' });

    useEffect(() => {
        if (categoryToEdit) {
            setCategory({
                name: categoryToEdit.name,
                description: categoryToEdit.description
            });
        } else {
            setCategory({ name: '', description: '' });
        }
    }, [categoryToEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryToEdit) {
            onUpdateCategory(categoryToEdit.idCategory, category);
        } else {
            onAddCategory(category);
        }
        setCategory({ name: '', description: '' });
        onClose();
    };

    return (
        <Modal show={isOpen} onClose={onClose}>
            <ModalHeader>{categoryToEdit ? 'Editar Categoría' : 'Agregar Categoría'}</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <TextInput
                            id="name"
                            name="name"
                            value={category.name}
                            onChange={handleInputChange}
                            placeholder="Ingrese el nombre de la categoría"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                        <TextInput
                            id="description"
                            name="description"
                            value={category.description}
                            onChange={handleInputChange}
                            placeholder="Ingrese la descripción de la categoría"
                            required
                        />
                    </div>
                    <ModalFooter>
                        <Button
                            color="gray"
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button
                            color="blue"
                            type="submit" // Usa type="submit" para enviar el formulario
                        >
                            {categoryToEdit ? 'Actualizar' : 'Agregar'}
                        </Button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default AddCategoryModal;
