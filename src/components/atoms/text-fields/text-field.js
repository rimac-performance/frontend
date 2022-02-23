import "./style.css"

const TextField = (props) => {


    return (

          <input style = {{width: props.width ? props.width: ""}} className = {props.error ? "errorTextField" : "textField"} type="Text" placeholder= {props.placeholder}/>

    )


}

export default TextField