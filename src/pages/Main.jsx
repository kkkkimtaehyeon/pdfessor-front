import {Card, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Main = () => {


    return (
        <Container>
            <Col className="m-2">
                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        내 정보
                    </Card>
                </Row>
                <Row>
                    <Card className="card-body border-0 bg-light">
                        <Link to="/new" className="btn btn-primary btn-lg btn-block m-1">퀴즈 등록</Link>
                        <Link to="/quiz" className="btn btn-primary btn-lg btn-block m-1">내 퀴즈</Link>
                        <button className="btn btn-primary btn-lg btn-block m-1">내 기록</button>
                        <Link to="/upload" className="btn btn-primary btn-lg btn-block m-1">PDF 업로드</Link>
                        <Link to="/mypdf" className="btn btn-primary btn-lg btn-block m-1">내 PDF</Link>
                    </Card>
                </Row>
            </Col>
        </Container>

    );
}

export default Main;