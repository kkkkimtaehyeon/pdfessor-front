import { Card, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
    const location = useLocation();
    const id = location.state.id;
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/quizzes/${id}`)
            .then(response => {
                setQuestions(response.data.questions);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const renderQuestions = () => {
        return questions.map((question, questionIndex) => (
            <Card className="card-body border-0 bg-light mb-3" key={questionIndex}>
                <Card className="card-body border-0 bg-light-subtle mb-2">
                    {questionIndex + 1}. {question.question}
                </Card>
                <Card className="card-body border-0 bg-light-subtle mb-2">
                    {question.options.length > 0 ? (
                        question.options.map((option, optionIndex) => {
                            const optionId = `question-${questionIndex}-option-${optionIndex}`;
                            return (
                                <Card className="card-body border-0 bg-secondary-subtle mb-2" key={optionIndex}>
                                    <input
                                        type="checkbox"
                                        className="btn-check"
                                        id={optionId}
                                        autoComplete="off"
                                    />
                                    <label
                                        className="btn"
                                        htmlFor={optionId}
                                    >
                                        {option}
                                    </label>
                                </Card>
                                );
                        })
                    ) : (
                        <Card className="card-body border-0 bg-secondary-subtle mb-2">
                        <input type="text" className="form-control" placeholder="답을 입력하세요" />
                        </Card>
                    )}
                </Card>
            </Card>
        ));
    };

    return (
        <Container>
            <h1>id는 {id}입니다.</h1>
            {renderQuestions()}
            <Row className="fixed-bottom mb-3">
                <Link to="/" className="btn btn-lg btn-primary">퀴즈 종료</Link>
            </Row>
        </Container>
    );
};

export default Quiz;
