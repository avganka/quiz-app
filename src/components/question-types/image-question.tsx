function ImageQuestion(): JSX.Element {
  return (
    <div className="question">
      <div className='question__image-wrapper'>
        <img src="./mock-film.jpeg" alt="" />
      </div>
      <p className='question__text'>Назовите фильм</p>
    </div>
  );
}

export default ImageQuestion;
