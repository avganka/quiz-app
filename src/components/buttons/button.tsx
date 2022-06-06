
type ButtonProps = {
  btnStyle: string,
  close?: boolean,
  check?: boolean,
  back?: boolean,
  leaderboard?: boolean,
  children? : React.ReactNode,
}

function Button(props: ButtonProps):JSX.Element {
  const {btnStyle, close, check, back, leaderboard, children} = props;
  let buttonType = '';

  switch (true) {
    case close:
      buttonType = 'close';
      break;
    case check:
      buttonType = 'check';
      break;
    case back:
      buttonType = 'back';
      break;
    case leaderboard:
      buttonType = 'leaderboard';
      break;
    default:
      break;
  }

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol
            id="icon-back"
            clipRule="evenodd"
            fillRule="evenodd"
            troke-linejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
          >
            <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fillRule="nonzero"/>
          </symbol>
          <symbol
            id="icon-check"
            viewBox="0 0 24 24"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/>
          </symbol>
          <symbol
            id="icon-close"
            clipRule="evenodd"
            fillRule="evenodd"
            troke-linejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
          </symbol>
          <symbol
            id="icon-leaderboard"
            clipRule="evenodd"
            fillRule="evenodd"
            troke-linejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
          >
            <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path d="M6.5 21H3c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm7.25-18h-3.5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3.5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM21 11h-3.5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"/>
          </symbol>
        </svg>
      </div>
      <button className={`button button-${btnStyle}`}>
        {
          children
            ? children
            :
            <svg width='24px' height='24px'>
              <use xlinkHref={`#icon-${buttonType}`}></use>
            </svg>
        }

      </button>
    </>

  );
}

export default Button;
