import Button from '../buttons/button';

function Modal():JSX.Element {
  return (
    <div className="modal">
      <div className="modal__content">
        <input type="text" placeholder='Введите название команды' />
        <Button btnStyle='danger' close></Button>
        <Button btnStyle='success'>Готово</Button>
      </div>
    </div>
  );
}

export default Modal;
