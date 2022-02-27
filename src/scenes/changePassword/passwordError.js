import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow} from "../../components/atoms/arrows";
const ErrorPassword = () => {
    return (
        <>
        <BackArrow></BackArrow>
        <div className="container">
        <h2>There was an Error</h2>
        <p>There was an error when resetting your password. If you would like to try again, please click the Retry button.</p>
        <PrimaryButton  text={"RETRY"}></PrimaryButton>
        </div>
        </>
    )

}

export default ErrorPassword