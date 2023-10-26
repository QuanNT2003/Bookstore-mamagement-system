import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './style.scss';
ProductTypeList.propTypes = {
    productTypeList: PropTypes.array.isRequired,
};

function ProductTypeList({ productTypeList }) {
    const [producttypes, setProducttype] = useState([]);
    const [PerPage, setPerPage] = useState(7);
    const [currentPage, setcurrentPage] = useState(1);

    const numofTotalPage = Math.ceil(producttypes.length / PerPage);
    const pages = [...Array(numofTotalPage + 1).keys()].slice(1);

    const indexOflastPd = currentPage * PerPage;
    const indexOffirstPd = indexOflastPd - PerPage;

    const visible = producttypes.slice(indexOffirstPd, indexOflastPd);

    useEffect(() => {
        setProducttype(productTypeList);
    })

    const prevPage = () => {
        if (currentPage !== 1) setcurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage !== numofTotalPage) setcurrentPage(currentPage + 1);
    }

    return (
        <div className='producttype-list'>
            {
                visible.map(type => (
                    <div key={type.id} className=' pb-2 productTypeItem'>
                        <Row className='mt-2 '>
                            <Col xs md={1} className='p-4 mt-2'><Form.Check aria-label="option 1" /></Col>
                            <Col xs md={5} className='p-1 mt-2'>
                                <Container>
                                    <Row>
                                        <Col xs md={9}>
                                            <p className='mb-2 typeid'>{type.idtype}</p>
                                            <p className='mb-2'>{type.name}</p>
                                        </Col>
                                    </Row>

                                </Container>
                            </Col>



                            <Col xs md={5} className='p-1 mt-2'>{type.note}</Col>
                            <Col xs md={1} className='p-1 mt-2'>{type.date}</Col>
                        </Row>
                    </div>
                ))
            }

            <Row className='mt-3 me-3'>
                <Col xs md={8} className='d-flex  justify-content-end'>

                    <p className='mt-3'>Chọn số lượng</p>
                    <Form.Select aria-label="Default select example" placeholder='Loai san pham' className='ms-2 form-select' onChange={(e) => {
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

export default ProductTypeList;