import "./style.css";
import { PrimaryButton } from "../../components/atoms/buttons";
import { BackArrow } from "../../components/atoms/arrows";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo/revPerformanceLogo.svg";

const ContactDealer = () => {
  let params = useParams();
  const token = params.token;
  console.log(token);
  return (
    <>
      <BackArrow></BackArrow>
      <div className="container">
        <img src={Logo} alt="logo" />
        <h1>Contact Dealer</h1>
        <p>
          Your dealer is Rev cars of Rochester, New York. Click below to email
          your dealership.
        </p>
        <PrimaryButton text={"EMAIL"}></PrimaryButton>
      </div>
    </>
  );
};

export default ContactDealer;
