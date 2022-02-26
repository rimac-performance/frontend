import "./style.css"
const AutomobileInfo = (props) => {
    return (
        <div onClick={props.onClick} className="container">
            <div className="image">
                <img src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg" alt = "car"></img>
            </div>

            <div className="infoName">

                <h3>AUTOMOBILE</h3>
                <p>Model: {props.model} </p>
                <p>VIN: {props.vin}</p>
                <p className= {props.show ? "showTag" : "hiddenTag"}>Owner: </p>

            </div>

        </div>
    )

}

export default AutomobileInfo