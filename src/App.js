import MenuBar from './Components/MenuBar/MenuBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Overview from './Pages/Overview/Overview';
import Product from './Pages/Product/Product';
import './App.css';
function App() {
  return (
    <div className="App">
      <Container fluid className='w-100'>
        <Row>
          <Col xs={4} md={2} className='p-0'>
            <MenuBar />
          </Col>
          <Col xs={8} md={10} className='content p-0'>
            <Routes>
              <Route path='/overview' Component={Overview} />
              <Route path='/product' Component={Product} />
            </Routes>



          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
