import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaCheck } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'


ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
};





function ProductList({ productList }) {

    return (
        <div>
            {
                productList.map(product => (
                    <div key={product.id} className='ProductItem pb-2'>
                        <Row className='mt-2 '>
                            <Col xs md={1} className='p-4 mt-2'><Form.Check aria-label="option 1" /></Col>
                            <Col xs md={4} className='p-1 mt-2'>
                                <Container>
                                    <Row>
                                        <Col xs md={3} className='ps-0'>
                                            <img src={product.img} className='h-100 w-75' alt=''></img>
                                        </Col>
                                        <Col xs md={9}>
                                            <p className='mb-2'>{product.idpd}</p>
                                            <p className='mb-2'>{product.name}</p>
                                        </Col>
                                    </Row>

                                </Container>
                            </Col>
                            {product.status === 1 ? (
                                <Col xs md={1} className=' mt-2'  >
                                    <div className='available'>
                                        <FaCheck />
                                        Đang giao dịch
                                    </div>

                                </Col>
                            ) : (
                                <Col xs md={1} className=' mt-2'  >
                                    <div className='nonavailable'>
                                        <FaXmark />
                                        Ngừng giao dịch
                                    </div>


                                </Col>
                            )}

                            <Col xs md={1} className='p-1 mt-2'><span className='loai'> {product.loai}</span></Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.nhom}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.giaban}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.giavon}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.tonkho}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.ngaytao}</Col>
                        </Row>
                    </div>
                ))
            }



        </div>
    );
}

export default ProductList;