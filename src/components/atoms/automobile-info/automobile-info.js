import "./style.css"
const AutomobileInfo = (props) => {
    return (
        <div className="container">
            <div className="image">
                <img src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/156FE/production/_116860878_c_two1.jpg" alt = "car"></img>
            </div>

            <div className="infoName">

                <h3>AUTOMOBILE</h3>
                <p>Model: {props.model} </p>
                <p>VIN: {props.vin}</p>
                <p>Co-Owner: {props.coOwner}</p>

            </div>

        </div>
    )

}

export default AutomobileInfo