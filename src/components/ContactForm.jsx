import React from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-top: 3rem;

  .form__group {
    position: relative;
    padding: 15px 0 0;
    padding-top: 10px;
    width: 70%;
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
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }

  button {
    width: 8.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => `rgba(${props.theme.black}, 1)`};
    border-radius: 50px;
    padding: 10px 0;

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
      padding: 16px 0;
      background: transparent;
      transition: border-color 0.2s;
    }

    .buttonContainer {
      padding-top: 1rem;
      // padding-right: 1rem;
    }

    button {
      width: 7rem;
      padding: 7px 0;
      font-size: ${(props) => props.theme.fontxxs};
      img {
        width: 20px;
      }
    }

    .form__group {
      padding-top: 0px;
      width: 80%;
      padding-right: 1rem;
    }

    .form__field {
      font-size: ${(props) => props.theme.fontxxs};
    }
  }
`;

const ContactForm = () => {
  return (
    <ContactFormContainer id="#section2">
      <h1>Or Contact Us Directly Here 😌</h1>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
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
          required
        />
        <label htmlFor="budget" className="form__label">
          Budget
        </label>
      </div>
      <div className="buttonContainer">
        <button>
          Send
          <span>
            <img src="/icons/Send.svg" alt="send" />
          </span>
        </button>
      </div>
    </ContactFormContainer>
  );
};

export default ContactForm;
