import React from "react";
import { Button } from "../Button/Button";
import InputField from "../Inputfield/InputField";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "./FormHero.css";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "../Inputfield/TextArea";
import Hero from "../Hero/Hero";
function Formhero({
  headline,
  showButton,
  onClick,
  message,
  responseError,
  imageRight,
  imageleft,
  formType,
  buttonLabel,
  inputLabels,
  inputValues,
  inputNames,
  handleChange,
  onSubmit,
  formErrors,
  alt1,
  alt2,
}) {
  const history = useNavigate();
  // console.log(inputLabels.map((label)=>label.id))
  // const handleChange1=(e)=>{
  //     // const {name,value}=e.target;
  //     // setFormValues({...formValues,[name]:value})
  //     console.log(e.target)
  // };
  // console.log(inputNames[0]);
  return (
    <>
      <div className="container" style={{ marginTop: "0.6em" }}>
        {formType != "contact" && (
          <Link to="/" className="navbar-logo">
            {/* <img
                      src='images/logo_transparent.png'
                      style={{height:60}}
                      alt="" /> */}
            <p>
              <span>CONTER</span>IZE{" "}
            </p>
          </Link>
        )}
      </div>

      <div className="form-hero-section">
        <div className="form-hero-container">
          <div
            // className="row form-hero-row"
            className=" form-hero-row"
            style={
              {
                //   display: "flex",
                //   flexDirection: "row",
                //   background: "red",
              }
            }
          >
            {formType === "contact" && (
              <div className="right__hero-img-wrapper">
                <img src={imageleft} alt={alt2} className="right__hero-img" />

                <Hero
                  subHeadline="contact us"
                  headline="Let’s work as team"
                  description="We will be glad to speak with you, getting in touch with
                          is your first best step to achieve great measure of success"
                />
              </div>
            )}
            <div className="form__hero-text-wrapper">
              {/* <pre>{JSON.stringify(inputValues,undefined,2)}</pre> */}

              <form onSubmit={onSubmit}>
                <div className="form-col">
                  {/* {message===null ? null : <div className='success-message'>{message}</div>} */}

                  <div className="left__hero-img-wrapper">
                    <img
                      src={imageRight}
                      alt={alt1}
                      className="left__hero-img"
                    />
                  </div>

                  <h1 className="headline">{headline}</h1>

                  <div className=" btn-wrapper">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                      }}
                    >
                      {/* {inputLabels.slice(0,2).map((label)=>//pick the first 3elements */}

                      <InputField
                        label={inputLabels[0]}
                        value={inputValues[0]}
                        name={inputNames[0]}
                        inputStyle="input--shadow-purple"
                        inputColor="purple-input"
                        onHandleChange={handleChange}
                      />
                      <p className="errors">{formErrors[0]}</p>
                      <InputField
                        label={inputLabels[1]}
                        value={inputValues[1]}
                        name={inputNames[1]}
                        inputStyle="input--shadow-purple"
                        inputColor="purple-input"
                        onHandleChange={handleChange}
                      />
                      <p className="errors">{formErrors[1]}</p>

                      {/* )} */}
                      {formType == "register" && (
                        <div style={{ marginTop: "10px" }}>
                          <InputField
                            label={inputLabels[2]}
                            inputStyle="input--shadow-purple"
                            inputColor="purple-input"
                            name={inputNames[2]}
                            value={inputValues[2]}
                            onHandleChange={handleChange}
                          />
                          <p className="errors">{formErrors[2]}</p>
                        </div>
                      )}
                      {formType == "contact" && (
                        <div className="is_Reg" style={{ marginTop: "10px" }}>
                          <TextArea />
                        </div>
                      )}
                    </div>

                    <p className="errors">{responseError ?? ""}</p>
                    {formType == "contact" ? (
                      <div style={{ marginTop: "0px" }}>
                        <Button
                          buttonColor="red"
                          buttonSize="btn--large"
                          style={{ width: "100%" }}
                        >
                          Send message
                        </Button>
                        <div className="hr-wrapper">
                          <hr className="hr"></hr>
                          {/* <p className="hr-p ">OR</p> */}
                          <hr className="hr"></hr>
                        </div>
                        {/* <div className="hr-icons">
                          <FaFacebook className="icons" />
                          <FaWhatsapp className="icons" />
                          <FaTwitter className="icons" />
                        </div> */}
                      </div> //for register and sign up
                    ) : (
                      <div style={{ marginTop: "0px" }}>
                        {/* <Link to={'/'+ buttonLabel[0]} > */}
                        <Button
                          buttonColor="red"
                          buttonSize="btn--large"
                          style={{ width: "100%" }}
                        >
                          {buttonLabel[0]}
                        </Button>
                        {/* </Link> */}
                        <div className="hr-wrapper">
                          <hr className="hr"></hr>
                          <p className="hr-p ">OR</p>
                          <hr className="hr"></hr>
                        </div>
                        <Link to={"/" + buttonLabel[1]}>
                          <Button
                            buttonColor="purple"
                            // buttonSize="btn--mobile"
                            buttonStyle="btn--outline"
                            buttonSize="btn--large"
                            style={{ width: "100%" }}
                          >
                            {buttonLabel[1]}
                          </Button>
                        </Link>
                        <div className="forgot-password-link">
                          <Link
                            to="/forgotPassword"
                            className="forgot-password-link"
                          >
                            Forgot Your Password
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formhero;
