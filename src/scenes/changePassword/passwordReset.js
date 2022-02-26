import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
const ResetPassword = () => {
    return (
        <>
        <BackArrow></BackArrow>
        <div className="container">
        <h2>Password Reset</h2>
        <p>Thank You! You should reveive an email with a link to reset your passoword</p>
        <PrimaryButton  text={"OK"}></PrimaryButton>
        </div>
        </>
    )

}

export default ResetPassword