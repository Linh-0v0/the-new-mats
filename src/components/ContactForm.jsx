import React, { useState } from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-top: 3rem;

  form {
    width: 70%;
  }

  .form__group {
    position: relative;
    padding: 15px 0 0 0;
    margin-top: 10px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${(props) => `rgba(${props.theme.black}, 0.5)`};
    outline: 0;
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => `rgba(${props.theme.black}, 1)`};
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: ${(props) => props.theme.fontxs};
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${(props) => `rgba(${props.theme.black}, 0.5)`};
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${(props) => `rgba(${props.theme.black}, 0.5)`};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${(props) => `rgba(${props.theme.black}, 0.5)`},
      ${(props) => `rgba(${props.theme.white}, 0.5)`}
    );
    border-image-slice: 1;
  }

  /* reset input */
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  .buttonContainer {
    width: 70%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }

  button {
    width: 8.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => `rgba(${props.theme.black}, 1)`};
    border-radius: 50px;
    padding: 10px 0;
    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 0.25rem;
    font-family: inherit;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => `rgba(${props.theme.black}, 1)`};
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    img {
      width: 25px;
    }
  }

  button:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  @media (max-width: 920px) {
    width: 90%;
    align-items: center;
    row-gap: 0.6rem;
    padding-top: 2rem;

    .form__field {
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid ${(props) => `rgba(${props.theme.black}, 0.5)`};
      outline: 0;
      font-size: ${(props) => props.theme.fontxs};
      color: ${(props) => `rgba(${props.theme.black}, 1)`};
      padding: 8px 0;
      background: transparent;
      transition: border-color 0.2s;
    }

    button {
      width: 7rem;
      padding: 7px 0;
      font-size: ${(props) => props.theme.fontxxs};
      img {
        width: 20px;
      }
    }

    form {
      width: 80%;
    }

    .form__group {
      margin-top: 0.2rem;
      margin-bottom: 1rem;
      padding: 10px 0 0 0;
      width: 100%;
      padding-right: 1rem;
    }
    
    &:placeholder-shown ~ .form__label {
      font-size: ${(props) => props.theme.fontxs};
      cursor: text;
      top: 0px;
    }

  }
`;

const ContactForm = () => {
  const [state, setState] = useState({ name: "", email: "", project: "", budget: "" });

  const handleUserName = (e) => {
    setState({name: e.target.value});
  }

  const handleEmail = (e) => {
    setState({email: e.target.value});
  }

  const handleProject = (e) => {
    setState({project: e.target.value});
  }

  const handleBudget = (e) => {
    setState({budget: e.target.value});
  }

  const handleUpdate = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <ContactFormContainer id="#section2">
      <h1>Or Contact Us Directly Here 😌</h1>
      <form
        action="https://getform.io/f/d1270ca2-a9ca-400b-9ca8-6ae061da59b9"
        method="POST"
      >
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            value={state.name}
            onChange={handleUserName}
            handleUpdate={handleUpdate}
            required
          />
          <label htmlFor="name" className="form__label">
            Your name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleEmail}
            handleUpdate={handleUpdate}
            required
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Project"
            name="project"
            id="project"
            value={state.project}
            onChange={handleProject}
            handleUpdate={handleUpdate}
            required
          />
          <label htmlFor="project" className="form__label">
            Project
          </label>
        </div>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Budget"
            name="budget"
            id="budget"
            value={state.budget}
            onChange={handleBudget}
            handleUpdate={handleUpdate}
            required
          />
          <label htmlFor="budget" className="form__label">
            Budget
          </label>
        </div>
        <div className="buttonContainer">
         
          <button onClick={() => setState({ name: "", email: "", project: "", budget: ""})}>
            Clear
            <span>
              {/* <img src="/" alt="clear" /> */}
            </span>
          </button> 
          <button type="submit">
            Send
            <span>
              <img src="/icons/Send.svg" alt="send" />
            </span>
          </button>
        </div>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
