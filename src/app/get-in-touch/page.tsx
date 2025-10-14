"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { emailSend } from "../../../actions/mail";

interface EmailData {
  to: string;
  subject: string;
  text: string;
}

export default function Form() {
  const [emailData, setEmailData] = useState<EmailData>({
    to: "",
    subject: "",
    text: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    console.log(emailData);
    await emailSend(emailData);
  };
  return (
    <StyledWrapper
      style={{
        margin: "auto",
        width: "40%",
        height: "350px",
        marginTop: "80px",
        marginBottom: "150px",
      }}
    >
      <div className="form-card1">
        <div className="form-card2">
          <form className="form">
            <p className="form-heading">Get In Touch</p>
            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                name="to"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                name="subject"
                type="text"
                onChange={handleChange}
              />
            </div>
            {/* <div className="form-field">
              <input required placeholder="Subject" className="input-field" name='text' type="text" />
            </div> */}
            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                name="text"
                className="input-field"
                defaultValue={""}
                onChange={handleChange}
              />
            </div>
            <button className="sendMessage-btn" onClick={sendEmail}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    //background-color: #0a192f;
    border-radius: 20px;
  }

  .form-heading {
    text-align: center;
    margin: 2em;
    color: #64ffda;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #64ffda;
    font-weight: bold;
    outline: 1px solid #64ffda;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #64ffda;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #64ffda 0%, #64ffda 100%);
    border-radius: 22px;
    transition: all 0.3s;
    box-shadow: 0px 0px 10px rgba(100, 255, 218, 0.5);
  }

  .form-card1:hover {
    box-shadow: 0px 0px 25px rgba(100, 255, 218, 0.8),
      0px 0px 40px rgba(100, 255, 218, 0.5);
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;
