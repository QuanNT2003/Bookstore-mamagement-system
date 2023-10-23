import { FaBell } from 'react-icons/fa6'
import { FaUserLarge } from 'react-icons/fa6'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <div className="Header">
            <Row className='mt-3'>
                <Col xs md={4} className='text-end'>
                    <FaBell />
                </Col>
                <Col xs md={8} >
                    <Row>
                        <Col xs md={3}>
                            <FaUserLarge className='Avatar' />
                        </Col >
                        <Col xs md={9} className='text-start'>Phạm Tuấn Kiệt</Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}