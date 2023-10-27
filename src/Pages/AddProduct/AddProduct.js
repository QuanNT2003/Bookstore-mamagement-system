import Header from '../../Components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../AddProduct/AddProduct.css';
import { FaAngleLeft } from 'react-icons/fa6';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaCirclePlus } from 'react-icons/fa6'
export default function ProductAdd() {
    const n = [
        {
            id: 1,
            name: "",
            value: "",
        }
    ]
    const add_attribute = () => {

    }
    return (
        <div className='AddProduct'>
            <Container fluid className='w-100'>
                <Row>
                    <div>
                        <Row className='header'>
                            <Col xs md={9} className='mt-2'>
                                <a className='title  ' href='#' >
                                    <FaAngleLeft className='me-2' />
                                    Quay lại trang danh sách sản phẩm
                                </a>
                            </Col>

                            <Col xs md={3}>
                                <Header />
                            </Col>
                        </Row>

                        <Row className='ms-2 mt-2 text-white fs-1'>
                            Thêm sản phẩm
                        </Row>

                        <Row className='content-info'>
                            <Col xs md={6}>
                                <div className='frame'>
                                    <Row className='ms-3 mb-3 frame-title' > Ảnh sản phẩm</Row>
                                </div>
                                <div className='frame'>
                                    <Row className='ms-3 mb-3 frame-title' > Thông tin sản phẩm</Row>

                                    <Form className='mx-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='attribute-name'>Tên sản phẩm</Form.Label>
                                            <Form.Control placeholder="Nhập tên sản phẩm" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label className='attribute-name'>Vị trí</Form.Label>
                                            <Form.Control placeholder="Nhập vị trí" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='attribute-name'>Mô tả sản phẩm</Form.Label>
                                            <Form.Control as="textarea" rows={4} />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className='frame'>
                                    <Row className='ms-3 mb-3 frame-title' > Thông số</Row>
                                    <Row className='ms-1 mb-3 ' >
                                        <Col>Tên thuộc tính</Col>
                                        <Col>Giá trị thuộc tính</Col>
                                    </Row>

                                    {
                                        n.map(N => (
                                            <Row className='ms-1 mb-3 ' key={N.id} >
                                                <Col>
                                                    <Form.Group className="ms-2" controlId="exampleForm.ControlInput1">

                                                        <Form.Control />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="ms-2 me-2" controlId="exampleForm.ControlInput1">
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Col>
                                            </Row>)
                                        )
                                    }


                                    <Row>
                                        <Col className='text-primary ms-3 mb-3 attribute-add' onClick={add_attribute}>
                                            <FaCirclePlus className='me-2' />
                                            Thêm thuộc tính khác
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                            <Col xs md={6}>
                                <Row>
                                    <Col xs md={9}>
                                        <div className='frame'>
                                            <Row className='ms-3 mb-3 frame-title' > Thông tin bổ sung</Row>
                                            <div className='mb-3'>
                                                <p className='ms-3  mb-1 attribute-name'>Loại sản phẩm</p>
                                                <Form.Select aria-label="Default select example" className='ms-3 myform-select'>
                                                    <option selected disabled={true}>Chọn loại sản phẩm</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </div>
                                            <div className='mb-3'>
                                                <p className='ms-3 mb-1 attribute-name'>Nhóm sản phẩm</p>
                                                <Form.Select aria-label="Default select example" className='ms-3 myform-select'>
                                                    <option selected disabled={true}>Chọn nhóm sản phẩm</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </div>

                                        </div>
                                        <div className='frame'>
                                            <Row className='ms-3 mb-3 frame-title' > Giá bán</Row>
                                            <Row >
                                                <Col >
                                                    <Form.Group className="m-2" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className='attribute-name'>Giá bán tại cửa hàng</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group className="m-2" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className='attribute-name'>Giá vốn</Form.Label>
                                                        <Form.Control />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='frame'>
                                            <Row className='ms-3 mb-3 frame-title' > Trạng thái</Row>
                                            <Row className='ms-1 mb-3'>
                                                <Col xs md={9} className='attribute-name'>
                                                    Cho phép bán
                                                </Col>
                                                <Col>
                                                    <Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                        />
                                                    </Form>
                                                </Col>

                                            </Row>
                                        </div>
                                        <div className='frame'>
                                            <Row className='ms-3 mb-3 frame-title' > Khởi tạo kho hàng</Row>
                                            <Row className='ms-1 mb-3'>
                                                <Col xs md={6} className='mt-3 attribute-name'>
                                                    Tồn kho ban đầu
                                                </Col>
                                                <Col xs md={6}>
                                                    <Form.Group className="m-2" controlId="exampleForm.ControlInput1">

                                                        <Form.Control />
                                                    </Form.Group>
                                                </Col>

                                            </Row>
                                        </div>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='mt-4 text-end'>
                                        <Button className='my-btn' variant="outline-primary">Thoát</Button>{' '}
                                        <Button className='my-btn' variant="outline-primary">Lưu in mã vạch</Button>{' '}
                                        <Button className='my-btn' variant="primary">Lưu sản phẩm </Button>{' '}

                                    </Col>
                                </Row>

                            </Col>
                        </Row>



                    </div>
                </Row>
            </Container>
        </div>
    )
}