import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../MenuBar/MenuBar.css';
import { FaHouse } from 'react-icons/fa6'
import { FaBuffer } from 'react-icons/fa6'
import { FaWallet } from 'react-icons/fa6'
import { FaChartSimple } from 'react-icons/fa6'
import { FaBusinessTime } from 'react-icons/fa6'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa6'
import Accordion from 'react-bootstrap/Accordion';
import logo from '../../Assets/imges/logo.png';
import { Route, NavLink } from 'react-router-dom';

export default function MenuBar() {
    const navlink_active = ({ isActive }) => (isActive ? "navlink-active" : "");

    return (
        <div className="MenuBar">
            <img src={logo} alt="" class="my-icon "></img>

            <p class="btn text-wrap w-90 ms-2" href='#'>
                <Row >
                    <Col xs md={2}>
                        <FaHouse />
                    </Col>

                    <Col xs md={10} className='text-start ps-0'>
                        <NavLink to="/overview" className="my-navlink" >Tổng quan</NavLink>
                    </Col>
                </Row>


            </p>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={3}>
                                < FaCartShopping />
                            </Col>

                            <Col xs md={9} className='text-start ps-2 pe-0'>
                                Đơn hàng
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>

                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={3}>
                                < FaBuffer />
                            </Col>

                            <Col xs md={9} className='text-start ps-2 pe-0'>
                                Sản phẩm
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink to="/product" >
                                <a class="btn pb-2 text-wrap text-start" href='#'>
                                    Danh sách sản phẩm
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Quản lý kho
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Nhập hàng
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Kiểm hàng
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Nhà cung cấp
                                </a>
                            </NavLink>

                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>


            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={3}>
                                < FaUser />
                            </Col>

                            <Col xs md={9} className='text-start ps-2 pe-0'>
                                Khách hàng
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={4}>
                                < FaWallet />
                            </Col>

                            <Col xs md={8} className='text-start ps-2 pe-0'>
                                Sổ quỹ
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={3}>
                                < FaChartSimple />
                            </Col>

                            <Col xs md={9} className='text-start ps-2 pe-0'>
                                Báo cáo
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={2}>
                                < FaBuffer />
                            </Col>

                            <Col xs md={10} className='text-start ps-1 pe-0'>
                                Quản lý khuyến mãi
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={2}>
                                < FaUsers />
                            </Col>

                            <Col xs md={10} className='text-start ps-2 pe-0'>
                                Quản lý nhân viên
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row>
                            <Col xs md={2} className='pe-0'>
                                < FaBusinessTime />
                            </Col>

                            <Col xs md={10} className='text-start ps-2 pe-0'>
                                Nhật ký hoạt động
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                            <NavLink>
                                <a class="btn text-wrap text-start" href="#">
                                    Trang chủ
                                </a>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>


        </div>
    )
}