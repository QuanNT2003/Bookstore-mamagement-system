import MenuBar from './Components/MenuBar/MenuBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Overview from './Pages/Overview/Overview';
import Product from './Pages/Product/Product';
import ProductAdd from './Pages/AddProduct/AddProduct';
import ProductType from './Pages/ProductType/ProductType';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
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

              <Route path='/' Component={Overview} />
              <Route path='/overview' Component={Overview} />
              <Route path='/product' Component={Product} />
              <Route path='/product/add' Component={ProductAdd} />
              <Route path='/product_type' Component={ProductType} />
              <Route path='/product_info/:productid' Component={ProductInfo} />
            </Routes>



          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
