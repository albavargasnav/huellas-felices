import { useState } from 'react';
import T from 'prop-types';
import "./ConfirmationButton.css";

function ConfirmationButton({ confirmation, onConfirm, mostrar, ...props }) {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const showConfirmation = () => setConfirmationVisible(true);
  const hideConfirmation = () => setConfirmationVisible(false);

  const handleClick = showConfirmation;
  const handleConfirmClick = () => {
    hideConfirmation();
    onConfirm();
  };
  const handleCancelClick = hideConfirmation;
  if (mostrar) {
    return (
      <>
        <button className = "boton-confirmar" onClick={handleClick} {...props} />
        {confirmationVisible && (
          <div className='ventana-confirmacion'>
            {confirmation}
            <button onClick={handleConfirmClick}>Confirmar</button>
            <button onClick={handleCancelClick}>Cancelar</button>
          </div>
        )}
      </>
    );
  }
}

ConfirmationButton.propTypes = {
  confirmation: T.node,
  onConfirm: T.func.isRequired,
};

ConfirmationButton.defaultProps = {
  confirmation: null,
};

export default ConfirmationButton;
