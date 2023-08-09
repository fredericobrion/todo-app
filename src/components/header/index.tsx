function Header() {
  const sunIcon = './src/images/icon-sun.svg';
  const moonIcon = './src/images/icon-moon.svg';

  return(
    <header>
      <h1>TODO</h1>
      <button>
        <img src={ sunIcon } alt="Toggle Theme Button" />
      </button>
    </header>
  );
}

export default Header;
