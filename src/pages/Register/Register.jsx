import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Formhero from "../../components/FormHero/FormHero";

const Register = ({ setSuccessMessage }) => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [responseError, setResponseError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useNavigate();
  const errors = {};
  const inputValues = [formValues.name, formValues.email, formValues.password];

  const inputNames = ["name", "email", "password"];
  const inputErrors = [formErrors.name, formErrors.email, formErrors.password];
  const homeData = {
    headline: "Register",
    buttonLabel: ["Sign up", "Login"],
    inputLabels: ["Name..", "Enter email", "Password..."],
    inputValues: inputValues,
    inputNames: inputNames,
    imageRight: "images/letter.svg",
    imageleft: "images/letter.svg",
    formType: "register",
    alt1: "two circles",
    alt2: "baby",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trimLeft().trimRight() });

    console.log(formValues);
    // console.log(e.target)
  };
  // console.log(inputValues)
  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
    console.log(loading);
  };
  useEffect(() => {
    // setLoading(true)
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      register();
    }
  }, [formErrors]);
  const register = async () => {
    setLoading(true);
    // const errors={}
    const data = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    };
    // const url="http://localhost/buyenergy_api/public/api/register";
    const url = window.baseUrl + "register";
    fetch(url, {
      // credentials: 'include
      // Authorization:'http://localhost:8000/api/user',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': 'http://localhost:8000/api/user',
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log( data['token']);

        if (data["success"] === true) {
          const token = data["token"];
          console.log(token);
          // history('/login')
          // setToken(token)
          setShowModal(true);
          setLoading(false);
        } else {
          const error = data["email"][0];
          console.log(error);
          setResponseError(error);
          setLoading(false);
        }
        // console.log('Success:', data);
      })
      .catch((error) => {
        console.warn("Error:", error);

        setLoading(false);
      });
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : 
      ( */}
      <div>
        {/* {showModal && (
            <Modal
              isSuccess={true}
              heading="User has been register successfully"
              setOpenModal={setShowModal}
              onClick={() => {
                history("/login");
              }}
            />
          )} */}
        <Formhero
          {...homeData}
          handleChange={handleChange}
          onSubmit={onSubmit}
          formErrors={inputErrors}
          responseError={responseError}
        />
      </div>
      {/* )} */}
    </>
  );
};

export default Register;
