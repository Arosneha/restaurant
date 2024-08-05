import './App.css';
import { Link,Routes,Route } from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact  from './Pages/Contact';


function App() {
  return (
    <div>
      <Navbar expand="Ig" className='fixed-top bg-body-tertiary shadow'>
       <Container>
        <Navbar.Brand>

          <Link to="/" className='Navbar-brand text-success fw-semibold'>
            Queens Restaurant
          </Link>
        </Navbar.Brand>
                  <Navbar.Toggle aria-controls='basic-navbar-nav'  />
                 <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto justify-content-end w-100'    >
                      <Nav.Link href='/' className='active text-uppercase' >Home
                      </Nav.Link>
                      <Nav.Link href='/menu' className='active text-uppercase' >Menu
                      </Nav.Link>
                      <Nav.Link href='/about' className='active text-uppercase' >About
                      </Nav.Link>
                      <Nav.Link href='/contact' className='active text-uppercase' >Contact
                      </Nav.Link>
                       </Nav>
                  </Navbar.Collapse>
       </Container>

      </Navbar>

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/menu' element={<Menu />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />zzz
      </Routes>
          <footer className='bg-body-tertiary'>
            <p className='P-3 ,m-0 text-center'>copyright @ made by Queens Restaurant</p>
          </footer>


    </div>
  );
}

export default App;
