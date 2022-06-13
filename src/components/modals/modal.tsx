import { useState } from 'react';
import Button from '../buttons/button';

type ModalProps = {
  onClose: () => void,
  onSuccess: (arg0: string) => void,
}

function Modal({ onClose, onSuccess}: ModalProps):JSX.Element {
  const [modalText, setModalText] = useState('');

  return (
    <div className="modal">
      <div className="modal__content">
        <input type="text" value={modalText} onChange={(evt) => setModalText(evt.target.value)} placeholder='Введите название команды' />
        <div className='modal__controls'>
          <Button btnStyle='danger' close onClick={onClose}></Button>
          <Button btnStyle='success' onClick={() => onSuccess(modalText)}>Готово</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
