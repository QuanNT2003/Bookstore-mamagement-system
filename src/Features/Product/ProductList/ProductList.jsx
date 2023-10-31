import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaCheck } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { NavLink } from 'react-router-dom';

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
};





function ProductList({ productList }) {
    const [products, setProduct] = useState([]);
    const [PerPage, setPerPage] = useState(7);
    const [currentPage, setcurrentPage] = useState(1);

    const numofTotalPage = Math.ceil(products.length / PerPage);
    const pages = [...Array(numofTotalPage + 1).keys()].slice(1);

    const indexOflastPd = currentPage * PerPage;
    const indexOffirstPd = indexOflastPd - PerPage;

    const visible = products.slice(indexOffirstPd, indexOflastPd);

    useEffect(() => {
        setProduct(productList);
    })

    const prevPage = () => {
        if (currentPage !== 1) setcurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage !== numofTotalPage) setcurrentPage(currentPage + 1);
    }
    return (
        <div>
            {
                visible.map(product => (
                    <div key={product.id} className='ProductItem pb-2'>
                        <Row className='mt-2 '>
                            <Col xs md={1} className='p-4 mt-2'><Form.Check aria-label="option 1" /></Col>
                            <Col xs md={3} className='p-1 mt-2'>
                                <Container>
                                    <Row>
                                        <Col xs md={3} className='ps-0'>
                                            <img src={product.img} className='h-100 w-75' alt=''></img>
                                        </Col>
                                        <Col xs md={9}>
                                            <p className='mb-2 typeid'>{product.idpd}</p>
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

                            <Col xs md={2} className='p-1 mt-2 text-center'><span className='stype'> {product.loai}</span></Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.nhom}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.giaban}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.giavon}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.tonkho}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{product.ngaytao}</Col>
                            {/* <Col><NavLink to={"/product/info/" + product.id} className="text-decoration-none text-white" >Xem sản phẩm</NavLink></Col> */}
                        </Row>
                    </div>
                ))


            }
            <Row className='mt-3 me-3'>
                <Col xs md={8} className='d-flex  justify-content-end'>

                    <p className='mt-3'>Chọn số lượng</p>
                    <Form.Select aria-label="Default select example" placeholder='Loai san pham' className='ms-2 form-select'
                        onChange={(e) => {
                            setPerPage(e.target.value)
                        }}>

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>


                </Col>
                <Col xs md={4}>
                    <Pagination className=' justify-content-end'>
                        <Pagination.Prev onClick={prevPage} />
                        {
                            pages.map(page => (
                                <Pagination.Item
                                    key={page}
                                    onClick={() => setcurrentPage(page)}
                                    className={(currentPage === page) ? "active" : ""}>
                                    {page}</Pagination.Item>
                            ))
                        }
                        <Pagination.Next onClick={nextPage} />
                    </Pagination>
                </Col>
            </Row>






        </div>
    );
}

export default ProductList;