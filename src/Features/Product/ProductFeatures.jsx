import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './styles.scss';
import { FaSearch } from 'react-icons/fa'
import { FaSquareMinus } from 'react-icons/fa6'
import { useState, useEffect } from 'react';
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
            loai: 'Văn phòng phẩm',
            nhom: 'Sách giáo khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2021'
        },
        {
            id: 2,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP002',
            name: 'Sách giáo khoa lớp 7',
            status: 2,
            loai: 'Sách',
            nhom: 'Sách giáo khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 3,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP003',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách triết lý',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2022'
        },
        {
            id: 4,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP004',
            name: 'Tây du ký',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách truyện',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2023'
        },
        {
            id: 5,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP005',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách giáo khoa',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2021'
        },
        {
            id: 6,
            img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            idpd: 'SP006',
            name: 'Sách giáo khoa lớp 7',
            status: 1,
            loai: 'Sách',
            nhom: 'Sách triết lý',
            giaban: 200000,
            giavon: 190000,
            tonkho: 100,
            ngaytao: '10/05/2022'
        },
    ]

    const [grouppd, setgrouppd] = useState("");
    const [typepd, settypepd] = useState("");
    const [datepd, setdatepd] = useState("");
    const [search, setsearch] = useState("");

    const renderproductlist_type = productList.filter(product => typepd === "" || typepd === product.loai);
    const renderproductlist_group = renderproductlist_type.filter(product => grouppd === "" || grouppd === product.nhom);
    const renderproductlist_date = renderproductlist_group.filter(product => datepd === "" || product.ngaytao.includes(datepd));
    const renderproductlist = renderproductlist_date.filter(product => search === "" || product.name.includes(search) || product.idpd.includes(search));


    return (
        <div className='ProductFeatures'>
            <Row>
                <Col xs md={5}>
                    <InputGroup className="mb-3 mt-3 ms-3 w-75">
                        <Button variant="outline-secondary" id="button-addon1" >
                            <FaSearch />
                        </Button>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="Tìm kiếm theo tên hoặc mã sản phẩm"
                            onChange={(e) => { setsearch(e.target.value) }}
                        />
                    </InputGroup>





                </Col>
                <Col xs md={7}>
                    <Row className='mt-3 ms-3'>
                        <Col xs md={4}>
                            <Form.Select aria-label="Default select example" placeholder='Ngay tao' className='myform--select' onChange={(e) => { setdatepd(e.target.value) }}>
                                <option selected disabled>Chọn ngày tạo</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </Form.Select>
                        </Col>
                        <Col xs md={4}>
                            <Form.Select aria-label="Default select example" placeholder='Loai san pham' className=' myform--select' onChange={(e) => { settypepd(e.target.value) }}>
                                <option selected disabled>Chọn loại sản phẩm</option>
                                <option value="Sách">Sách</option>
                                <option value="Văn phòng phẩm">Văn phòng phẩm</option>
                            </Form.Select>
                        </Col>
                        <Col xs md={4}>
                            <Form.Select aria-label="Default select example" placeholder='Nhom san pham' className=' myform--select' onChange={(e) => { setgrouppd(e.target.value) }}>
                                <option selected disabled>Chọn nhóm sản phẩm</option>
                                <option value="Sách giáo khoa">Sách giáo khoa</option>
                                <option value="Sách triết lý">Sách triết lý</option>
                                <option value="Sách truyện">Sách truyện</option>
                            </Form.Select>
                        </Col>

                    </Row>



                </Col>
            </Row>

            <Row className='mt-2 contentbar '>
                <Col xs md={1} ><FaSquareMinus className='ms-3 mt-3' /></Col>
                <Col xs md={3} className='p-1 mt-2'>Mã sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2 text-center'>Trạng thái</Col>
                <Col xs md={2} className='p-1 mt-2 text-center'>Loại sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2'>Nhóm sản phẩm</Col>
                <Col xs md={1} className='p-1 mt-2'>Giá bán</Col>
                <Col xs md={1} className='p-1 mt-2'>Giá vốn</Col>
                <Col xs md={1} className='p-1 mt-2'>Tồn kho</Col>
                <Col xs md={1} className='p-1 mt-2'>Ngày tạo</Col>
            </Row>

            <Row className='mt-2 '>
                <ProductList productList={renderproductlist} />
            </Row>
        </div>
    );
}

export default ProductFeatures;