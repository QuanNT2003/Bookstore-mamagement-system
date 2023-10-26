import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Route, NavLink } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6'
import Header from '../../Components/Header/Header';
import ProductTypeFetures from '../../Features/ProductType/ProductTypeFeatures';
export default function ProductType() {
    return (
        <div> <Container fluid className='w-100'>
            <Row className='content'>
                <div>
                    <Row className='header'>
                        <Col xs md={9}>
                            <p className='title pt-3'>
                                Loại sản phẩm
                            </p>
                        </Col>

                        <Col xs md={3}>
                            <Header />
                        </Col>
                    </Row>
                </div>


                <Row className='justify-content-end'>
                    <Col xs md={3} className='toolbar '>
                        <Button variant="primary" className='text-end'>
                            <FaCirclePlus className='me-2' />
                            <NavLink to="#" className="text-decoration-none text-white" >Thêm loại sản phẩm</NavLink>
                        </Button>{' '}
                    </Col>
                </Row>


            </Row>
            <ProductTypeFetures />
        </Container></div>
    )
}