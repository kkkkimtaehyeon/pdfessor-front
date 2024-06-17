import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PdfSelector from "../../component/quiz/PdfSelector";
import axios from "axios";

const NewQuiz = () => {
    const[questionCount, setQuestionCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [pdfs, setPdfs] = useState([]);
    const options = ['ox', 'single', 'multiple', 'subjective'];

    useEffect(() => {
        axios.get("http://localhost:8000/pdfs")
            .then((response) => {
                setPdfs(response.data);
                console.log(pdfs);
            })
            .catch(error => {
                console.log("PDF 불러오기 실패", error);
            })
    }, []);



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

    const handleCheckboxChange = (event) => {
        const option = event.target.htmlFor;
        setSelectedOptions(prevOptions => {
            if (prevOptions.includes(option)) {
                return prevOptions.filter(item => item !== option);
            } else {
                return [...prevOptions, option];
            }
        });
    };

    useEffect(() => {
        console.log(selectedOptions);
    }, [selectedOptions]);

    const goMakeQuiz = () => {


    }

    return (
        <Container>
            <Col className="m-2">

                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <PdfSelector pdfs={pdfs}/>
                    </Card>
                </Row>

                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <label className="form-label">문제 형식을 선택해주세요.</label>
                        <Row className="d-flex justify-content-center">
                            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="ox"/>
                                <label className="btn btn-outline-primary" htmlFor="ox"
                                       onClick={handleCheckboxChange}>O/X</label>

                                <input type="checkbox" className="btn-check" id="single"/>
                                <label className="btn btn-outline-primary" htmlFor="single"
                                       onClick={handleCheckboxChange}>단답식</label>

                                <input type="checkbox" className="btn-check" id="multiple"/>
                                <label className="btn btn-outline-primary" htmlFor="multiple"
                                       onClick={handleCheckboxChange}>객관식</label>

                                <input type="checkbox" className="btn-check" id="subjective"/>
                                <label className="btn btn-outline-primary" htmlFor="subjective"
                                       onClick={handleCheckboxChange}>주관식</label>
                            </div>
                        </Row>
                    </Card>
                </Row>
                <Row className="mb-3">
                    <Card className="card-body border-0 bg-light">
                        <label htmlFor="questionCount" className="form-label">
                            {questionCount}문항
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