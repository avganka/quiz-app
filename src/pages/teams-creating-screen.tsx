import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/buttons/button';
import Modal from '../components/modals/modal';
import Team from '../components/team/team';

function TeamsCreatingScreen() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState(['Дикие кабаны']);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const createNewTeamHandler = (text: string) => {
    setTeams((prev) => [text, ...prev]);
    setShowModal(false);
  };

  const removeTeamHandler = (teamName: string) => {
    const newTeamList = teams.filter((team) => team !== teamName);
    setTeams(newTeamList);
  };


  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='app'>
        <div className="container">
          <h1>Выбор команд</h1>
          <div className='teams__list'>
            {teams.map((team) => (
              <Team key={team} src={'./avatars/deer.svg'} title={team} removeTeamHandler={removeTeamHandler}/>
            ))}
            {teams.length < 4 &&
              <div className='team add' onClick={() => setShowModal(true)}>
                <div className="team__image-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                </div>
                <h2>Добавить команду</h2>
                <span></span>
              </div>}
          </div>
        </div>
        <div className='footer'>
          <Button btnStyle='danger' back onClick={backHandler}></Button>
          <Button btnStyle='warning'>Продолжить</Button>
        </div>
      </div>
      {showModal && <Modal onClose={closeModalHandler} onSuccess={createNewTeamHandler}/>}
    </>
  );
}

export default TeamsCreatingScreen;
