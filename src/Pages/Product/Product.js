import MenuBar from '../../Components/MenuBar/MenuBar';
import Header from '../../Components/Header/Header';
import ProductFeatures from '../../Features/Product/ProductFeatures';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Product/Product.css'
import { FaFilePen } from 'react-icons/fa6'
import { FaPrint } from 'react-icons/fa6'
import { FaListUl } from 'react-icons/fa6'
import { FaCirclePlus } from 'react-icons/fa6'
export default function Product() {
    return (
        <div className="Product">
            <Container fluid className='w-100'>
                <Row>
                    <Col xs={4} md={2} className='p-0'>
                        <MenuBar />
                    </Col>
                    <Col xs={8} md={10} className='content'>
                        <div>
                            <Row className='header'>
                                <Col xs md={9}>
                                    <p className='title'>
                                        Danh sách sản phẩm
                                    </p>
                                </Col>

                                <Col xs md={3}>
                                    <Header />
                                </Col>
                            </Row>
                        </div>

                        <div >
                            <Row className='toolbar'>
                                <Col xs md={10}>
                                    <Button variant="primary" className='me-3'>
                                        <FaFilePen className='me-2' />
                                        Nhập file
                                    </Button>{' '}
                                    <Button variant="primary" className='me-3'>
                                        <FaPrint className='me-2' />
                                        Xuất file
                                    </Button>{' '}
                                    <Button variant="primary" className='me-3'>
                                        <FaListUl className='me-2' />
                                        Loại sản phẩm
                                    </Button>{' '}
                                </Col>

                                <Col xs md={2}>
                                    <Button variant="primary" className='text-end'>
                                        <FaCirclePlus className='me-2' />
                                        Thêm sản phẩm
                                    </Button>{' '}
                                </Col>
                            </Row>

                            <ProductFeatures />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}