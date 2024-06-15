import {Card, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Quiz = () => {

    return (
        <Container>
            <Card className="card-body border-0 bg-light mb-3">
                <Card className="card-body border-0 bg-light-subtle mb-2">
                    1. 1번 퀴즈를 맞추세요
                </Card>
                <Card className="card-body border-0 bg-light-subtle mb-2">
                    <Card className="card-body border-0 bg-secondary-subtle mb-2">
                        1. 1번답
                    </Card>
                    <Card className="card-body border-0 bg-secondary-subtle mb-2">
                        2. 2번답
                    </Card>
                    <Card className="card-body border-0 bg-secondary-subtle mb-2">
                        3. 3번답
                    </Card>
                    <Card className="card-body border-0 bg-secondary-subtle mb-2">
                        4. 4번답
                    </Card>
                </Card>
            </Card>
            <Row className="fixed-bottom mb-3">
                <Link to="/" className="btn btn-lg btn-primary">퀴즈 종료</Link>
            </Row>

        </Container>


    );
}

export default Quiz;