import {Card, Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const NewQuiz = () => {
    const navigate = useNavigate();
    const[questionCount, setQuestionCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const[sourceText, setSourceText] = useState('');

    const options = ['ox', 'single', 'multiple', 'subjective'];
    const handleRangeChange = (event) => {
        setQuestionCount(parseInt(event.target.value));
    };

    const getCheckedOptions = () => {
        // const newCheckedOptions = [];
        // options.forEach(option => {
        //     const checkbox = document.getElementById(option);
        //     if (checkbox.checked) {
        //         newCheckedOptions.push(checkbox.nextSibling.textContent);
        //     }
        // });
        // console.log(newCheckedOptions);
        console.log(selectedOptions);
    }

    const handleCheckboxChange = (option) => {
        setSelectedOptions(prevOptions => {
            if (prevOptions.includes(option)) {
                return prevOptions.filter(item => item !== option);
            } else {
                return [...prevOptions, option];
            }
        });

        console.log(selectedOptions);
    };

    const goMakeQuiz = () => {


    }

    return (
        <Container>
            <Col className="m-2">
                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <label className="form-label">문제 형식</label>
                        <div>
                            <input type="checkbox" className="btn-check" id="ox"/>
                            <label className="btn btn-outline-primary" htmlFor="ox" onClick={handleCheckboxChange}>O/X</label>
                            <input type="checkbox" className="btn-check" id="single"/>
                            <label className="btn btn-outline-primary" htmlFor="single" onClick={handleCheckboxChange}>단답식</label>
                            <input type="checkbox" className="btn-check" id="multiple"/>
                            <label className="btn btn-outline-primary" htmlFor="multiple" onClick={handleCheckboxChange}>객관식</label>
                            <input type="checkbox" className="btn-check" id="subjective"/>
                            <label className="btn btn-outline-primary" htmlFor="subjective" onClick={handleCheckboxChange}>주관식</label>
                        </div>
                    </Card>
                </Row>
                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <label htmlFor="questionCount" className="form-label">
                            문제 개수: {questionCount}
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="30"
                            step="5"
                            id="questionCount"
                            value={questionCount}
                            onChange={handleRangeChange}
                        />
                    </Card>
                </Row>
                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                    <input type="text" className="form-control" placeholder="텍스트를 입력해주세요."/>
                    </Card>
                </Row>

                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <input type="file" className="form-control" placeholder="파일"/>
                    </Card>
                </Row>
                <Row className="mb-3">
                    <button
                        className="btn btn-lg btn-primary"
                        onClick={getCheckedOptions}
                        disabled={questionCount === 0 && selectedOptions === []}>퀴즈 만들기</button>
                    <Link to="/" className="btn btn-lg btn-primary">뒤로가기</Link>
                </Row>
            </Col>
        </Container>
    );
}

export default NewQuiz;