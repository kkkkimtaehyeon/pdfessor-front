const PdfSelector = (props) => {

    return (
        <>
            <label>문제를 만들 PDF를 선택해주세요.</label>
            <select className="form-control">
                <option value="0">PDF를 선택해주세요.</option>
                {props.pdfs.map((pdf) => (
                    <option key={pdf.key} value={pdf.key}>{pdf.name}</option>
                ))}
            </select>
        </>
    );
}

export default PdfSelector;