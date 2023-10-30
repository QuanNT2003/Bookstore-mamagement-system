import Header from '../../Components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ProductInfo/ProductInfo.css';
import { FaAngleLeft } from 'react-icons/fa6';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Sample from '../../Assets/imges/sample.jpg';
import Barcose from '../../Assets/imges/ma_vach.jpg';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

export default function ProductInfo() {


    const { productid } = useParams()
    console.log({ productid })
    return (
        <div className='ProductInfo' title='Thông tin sản phẩm '>
            <Container fluid className='w-100'>
                <Row>
                    <div>
                        <Row className='header'>
                            <Col xs md={9} >
                                <a className='title ' href='#' >
                                    <FaAngleLeft className='me-2' />
                                    Quay lại trang danh sách sản phẩm
                                </a>
                            </Col>

                            <Col xs md={3}>
                                <Header />
                            </Col>
                        </Row>

                        <Row className='content-info'>
                            <Row className='mb-4'>
                                <Col xs md={8} >
                                    <div className='frame me-1 h-100'>
                                        <Row className='ms-1 mb-3 frame-title' > Thông tin sản phẩm</Row>
                                        <Row>
                                            <Col xs md={5}>
                                                <Row>
                                                    <Image src={Sample} className='img-big' rounded />
                                                </Row>
                                                <Row className='ms-3'>
                                                    <Image src={Sample} className='img-small' rounded />
                                                    <Image src={Sample} className='img-small' rounded />
                                                    <Image src={Sample} className='img-small' rounded />
                                                    <Image src={Sample} className='img-small' rounded />
                                                </Row>
                                                <Row className='ms-3'>
                                                    <Image src={Barcose} className='img-barcode' rounded />

                                                </Row>
                                            </Col>
                                            <Col xs md={7}>
                                                <p className='mb-0 frame-info'>Bút lông bi cao cấp Parker IM X-Black CT TB4-1975575</p>
                                                <p className='mb-0'>Đã bán : 9 </p>
                                                <p className='mb-3 frame-info'> 919.000đ </p>
                                                <Row className='mb-2'>
                                                    <Col className='properties' xs md={5}>
                                                        Loại sản phẩm :
                                                    </Col>
                                                    <Col xs md={7}>
                                                        Bút lông bi
                                                    </Col>
                                                </Row>
                                                <Row className='mb-2 '>
                                                    <Col xs md={5} className='properties'>
                                                        Nhóm sản phẩm :
                                                    </Col>
                                                    <Col xs md={7}>
                                                        Bút
                                                    </Col>
                                                </Row>
                                                <div className='specifications'>
                                                    <Row className='mb-1'>
                                                        <Col xs md={4} className='properties'>Kích thước</Col>
                                                        <Col xs md={1}>:</Col>
                                                        <Col xs md={6} className='bg-white'>180 x 50 x 25 mm</Col>
                                                    </Row>
                                                    <Row className='mb-1'>
                                                        <Col xs md={4} className='properties'>Kích thước</Col>
                                                        <Col xs md={1}>:</Col>
                                                        <Col xs md={6} className='bg-white'>180 x 50 x 25 mm</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs md={4} className='properties'>Kích thước</Col>
                                                        <Col xs md={1}>:</Col>
                                                        <Col xs md={6} className='bg-white'>180 x 50 x 25 mm</Col>
                                                    </Row>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>

                                </Col>

                                <Col xs md={4}>
                                    <div className='frame ps-2 h-100'>
                                        <Row className='mb-4 ms-1 frame-title'> Mô tả sản phẩm</Row>
                                        <p>Là đối tác lý tưởng với tiềm năng vô hạn, sở hữu thiết kế hiện đại, Parker IM khơi nguồn cảm hứng sáng tạo cho những người đang tìm kiếm ý tưởng mới trên con đường khởi nghiệp. Với ngòi thép không gỉ và hoàn thiện theo di sản Parker, mỗi chi tiết được tinh chế để đem đến trải nghiệm viết đáng tin cậy.</p>


                                        <p className='mb-0'>Xuất xứ: Trung Quốc</p>
                                        <p className='mb-0'>Thương hiệu: Parker</p>
                                        <p className='mb-0'>Màu mực: Xanh</p>
                                        <p className='mb-0'>Màu thân: Đen</p>
                                        <p className='mb-0'>Bảo hành: 24 tháng</p>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col xs md={8} >
                                    <Row>

                                        <Col xs md={12} >
                                            <div className='frame mb-4 ps-1 h-100'>
                                                <Row className='mb-4 ms-1 frame-title'> Giá bán</Row>
                                                <Row>
                                                    <Col xs md={6} >
                                                        <Row>
                                                            <Col xs md={5} className='properties'>Giá bán tại cửa hàng</Col>
                                                            <Col xs md={7}>: 919,000</Col>
                                                        </Row>

                                                    </Col>

                                                    <Col xs md={6}>
                                                        <Row>
                                                            <Col xs md={5} className='properties'>Giá vốn</Col>
                                                            <Col xs md={7}>: 900,000</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>

                                        </Col>
                                        <Col xs md={12} >
                                            <div className='frame ps-1 mt-3 pb-2 mb-0'>
                                                <Row className='ms-1 frame-title'> Trạng thái</Row>
                                                <Row className='mt-0 '>
                                                    <Col xs md={10}>Cho phép bán</Col>
                                                    <Col xs md={2}><Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"

                                                        />

                                                    </Form></Col>
                                                </Row>
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs md={4} >
                                    <div className='frame ps-2 h-100'>
                                        <Row className='mb-4 ms-1 frame-title'> Thông tin bổ sung</Row>
                                        <Row>
                                            <Col xs md={4} className='properties'>
                                                Mã sản phẩm
                                            </Col>
                                            <Col>
                                                : B1975575
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs md={4} className='properties'>
                                                Tồn kho
                                            </Col>
                                            <Col>
                                                : 50
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs md={4} className='properties'>
                                                Có thể bán
                                            </Col>
                                            <Col>
                                                : 50
                                            </Col>
                                        </Row>
                                    </div>

                                </Col>
                            </Row>
                            <Row >
                                <Col className='mt-4 text-end'>
                                    <Button className='my-btn' variant="outline-primary">Thoát</Button>{' '}
                                    <Button className='my-btn' variant="outline-danger">Xóa</Button>{' '}
                                    <Button className='my-btn' variant="primary">Sửa sản phẩm </Button>{' '}
                                </Col>

                            </Row>

                        </Row>



                    </div>
                </Row>
            </Container>
        </div>
    )
}