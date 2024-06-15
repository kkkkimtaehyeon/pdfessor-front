import {Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

const MyPdf = () => {
    const [pdfList, setPdfList] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/pdfs")
            .then(response => {
                setPdfList(response.data);
                console.log("PDF 불러오기 성공", response.data);
            })
            .catch(error => {
                console.log("PDF 불러오기 오류", error);
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
                  {pdfList.map((pdf, index) => {
                      return (
                          <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{pdf.name}</td>
                          </tr>
                      );
                  })}
                  </tbody>
              </table>

          </Card>

      </Container>
    );
}

export default MyPdf;