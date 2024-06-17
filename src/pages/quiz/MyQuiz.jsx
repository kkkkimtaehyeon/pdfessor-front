import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyQuiz = () => {
    const [quizList, setQuizList] = useState([]);
    useEffect(() => {

        axios.get("http://localhost:8000/quizzes")
            .then(response => {
                setQuizList(response.data);
                console.log("Quiz 불러오기 성공", response.data);
            })
            .catch(error => {
                console.log("Quiz 불러오기 오류", error);
            })
        return () => {

        };
    }, []);


    return (
        <Container>
            <Card className="card-body">

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quizList.map((quiz, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><Link to="/quiz" state={{id: quiz.id}}>{quiz.title}</Link></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

            </Card>

        </Container>
    );
}

export default MyQuiz;