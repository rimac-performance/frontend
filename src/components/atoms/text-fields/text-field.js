import "./style.css"

const TextField = ({ width, onChange, error, placeholder, type }) => {


    return (

        <input style={{ width: width ? width : "" }} className={error ? "errorTextField" : "textField"} type="Text" placeholder={placeholder} onChange={onChange} type={type} />

    )


}

export default TextField