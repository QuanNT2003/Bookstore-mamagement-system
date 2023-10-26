import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './styles.scss';
import { FaSearch } from 'react-icons/fa'
import { FaSquareMinus } from 'react-icons/fa6'
import ProductTypeList from './ProductTypeList/ProductTypeList';
ProductTypeFetures.propTypes = {

};

function ProductTypeFetures(props) {
    const productTypeList = [
        {
            id: 1,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 2,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 3,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 4,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 5,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 6,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 7,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 8,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 9,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 10,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 11,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 12,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 13,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 14,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 15,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
        {
            id: 16,
            name: 'Sách',
            idtype: 'SP001',
            note: 'sách đó',
            date: '20/03/2023'
        },
    ]
    return (
        <div className='ProductTypeFeatures'>
            <Row>
                <Col xs md={6}>
                    <InputGroup className="mb-3 mt-3 ms-3 w-75">
                        <Button variant="outline-secondary" id="button-addon1">
                            <FaSearch />
                        </Button>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="Tìm kiếm theo tên, mã loại"
                        />
                    </InputGroup>





                </Col>
            </Row>


            <Row className='mt-2 contentbar '>
                <Col xs md={1} ><FaSquareMinus className='ms-3 mt-3' /></Col>
                <Col xs md={5} className='p-1 mt-2'>Mã loại sản phẩm</Col>
                <Col xs md={5} className='p-1 mt-2'>Ghi chú</Col>
                <Col xs md={1} className='p-1 mt-2'>Ngày tạo</Col>
            </Row>

            <Row className='mt-2 '>
                <ProductTypeList productTypeList={productTypeList} />
            </Row>
        </div>
    );
}

export default ProductTypeFetures;