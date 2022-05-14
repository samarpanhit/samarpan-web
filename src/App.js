import logo from './logo.svg';
import './App.css';
import image1 from './images/logo.png'

function App() {
  return (
    <div className="App">
      <section id="title">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand">
            <img class="logo" src={image1} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#samarpanTitle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="samarpanTitle">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">community</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Documentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">partners</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    </section>
    </div>
  );
}

export default App;
