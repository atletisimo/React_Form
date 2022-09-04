import React from "react";

const Form = () => {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const handleLastNameInput = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const handleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const [valid, setValid] = React.useState(false);
  return (
    <div className="form-container">
      <form className="register" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="success">Successfully registered!</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          type="text"
          className="form"
          placeholder="Firstname"
          name="firstname"
          value={values.firstname}
        />
        {submitted && !values.firstname ? (
          <span>Please enter first name</span>
        ) : null}
        <br></br>
        <br></br>
        <input
          onChange={handleLastNameInput}
          type="text"
          className="form"
          placeholder="Lastname"
          name="lastname"
          value={values.lastname}
        ></input>{" "}
        {submitted && !values.lastname ? (
          <span>Please enter last name</span>
        ) : null}
        <br></br>
        <br></br>
        <input
          onChange={handleEmailInput}
          type="text"
          className="form"
          placeholder="Email"
          name="email"
          value={values.email}
        ></input>
        {submitted && !values.email ? <span>Please enter email</span> : null}
        <br></br>
        <br></br>
        <button>SUMBIT</button>
      </form>
    </div>
  );
};

export default Form;
