import React from 'react';
import Modal from './AddCategoryModal';  // Usa tu Modal
  // Ajusta la ruta si es necesario

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="¡Ocurrió un error!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Aceptar</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
