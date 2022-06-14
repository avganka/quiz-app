import { useState } from 'react';
import Modal from '../modals/modal';

type TeamProps = {
  src: string,
  title: string,
  removeTeamHandler: (arg0: string) => void
}

function Team({ src, title, removeTeamHandler }: TeamProps): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [teamName, setTeamName] = useState(title);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const changeTeamNameHandler = (text:string) => {
    setTeamName(text);
    setShowModal(false);
  };

  return (
    <>
      <div className='team'>
        <div className="team__image-wrapper first">
          <img src={src} alt={teamName} />
        </div>
        <h2>{`${teamName[0].toUpperCase()}${teamName.slice(1)}`}</h2>
        <span onClick={() => setShowModal(true)}>Изменить</span>
        <div className='team__close' onClick={() => removeTeamHandler(teamName)}>
          <svg width='15px' height='15px'>
            <use xlinkHref={'#icon-close'}></use>
          </svg>
        </div>
      </div>
      {showModal && <Modal onClose={closeModalHandler} onSuccess={changeTeamNameHandler}/>}
    </>
  );
}

export default Team;
