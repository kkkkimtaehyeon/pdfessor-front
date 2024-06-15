import {Card, Container} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UploadPdf = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');

    const onFile = (e) => {
        setFile(e.target.files[0]);
    }

    const onFilename = (e) => {
        setName(e.target.value);
    }

    const sendFile = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", file);
        formdata.append("name", name);
        axios.post("http://localhost:8000/pdfs", formdata)
            .then(response => {
                console.log("file send success");
                navigate("/mypdf");
            })
            .catch(error => {
                console.log("file send failed")
            })
    }

    return (
      <div className="d-flex justify-content-center align-items-center">
          <Card className="mt-5">
              <form className="col align-self-center m-3">
                  <div className="row">
                      <input type="file" onChange={onFile} className="form-control" accept="application/pdf"/>
                      <input type="text" onChange={onFilename} className="form-control" placeholder="저장할 이름을 입력해주세요." />
                      <button onClick={sendFile} className="btn btn-primary">저장</button>
                  </div>

              </form>
          </Card>
      </div>
    );
}

export default UploadPdf;