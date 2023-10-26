import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './styles.scss';
import { FaSearch } from 'react-icons/fa'
import { FaSquareMinus } from 'react-icons/fa6'

import ProductList from './ProductList/ProductList';

ProductFeatures.propTypes = {

};

function ProductFeatures(props) {
    const productList = [
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 2,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 2,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 3,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 4,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 5,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 6,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP001',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giao khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
    ]

    return (
        <div className='ProductFeatures'>
            <Row>
                <Col xs md={6}>
                    <InputGroup className="mb-3 mt-3 ms-3 w-75">
                        <Button variant="outline-secondary" id="button-addon1">
                            <FaSearch />
                        </Button>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="Nhap ten hoac ma san pham"
                        />
                    </InputGroup>





                </Col>
                <Col xs md={6}>
                    <Row className='mt-3 ms-3'>
                        <Col xs md={3}></Col>
                        <Col xs md={3}>
                            <Form.Select aria-label="Default select example" placeholder='Ngay tao' className=' w-75'>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col xs md={3}>
                            <Form.Select aria-label="Default select example" placeholder='Loai san pham' className=' w-75'>

                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col xs md={3}>
                            <Form.Select aria-label="Default select example" placeholder='Nhom san pham' className=' w-75'>

                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>



                </Col>
            </Row>

            <Row className='mt-2 contentbar '>
                <Col xs md={1} ><FaSquareMinus className='ms-3 mt-3' /></Col>
                <Col xs md={4} className='p-1 mt-2'>Mã sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2 text-center'>Trạng thái</Col>
                <Col xs md={1} className='p-1 mt-2'>Loại sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2'>Nhóm sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2'>Giá bán</Col>
                <Col xs md={1} className='p-1 mt-2'>Giá vốn</Col>
                <Col xs md={1} className='p-1 mt-2'>Tồn kho</Col>
                <Col xs md={1} className='p-1 mt-2'>Ngày tạo</Col>
            </Row>

            <Row className='mt-2 '>
                <ProductList productList={productList} />
            </Row>
        </div>
    );
}

export default ProductFeatures;