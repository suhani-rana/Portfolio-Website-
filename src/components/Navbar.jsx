import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">SR</div>
          <h2>Suhani Rana</h2>
        </div>

        {/* Navigation */}
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Connect Button */}
        <a
          href="https://wa.me/919311890883"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-btn"
        >
          Connect With Me
        </a>

      </div>
    </header>
  );
}

export default Navbar;