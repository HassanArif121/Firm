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
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      await emailSend(emailData);
      
      // If we reach here, email was sent successfully
      setStatus({ type: "success", message: "Email sent successfully! ✓" });
      setEmailData({ to: "", subject: "", text: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error: any) {
      console.error("Email send error:", error);
      setStatus({
        type: "error",
        message: error?.message || "Failed to send email. Please try again.",
      });
    }
  };

  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={sendEmail}>
            <p className="form-heading">Get In Touch</p>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                name="to"
                type="email"
                onChange={handleChange}
                value={emailData.to}
                disabled={status.type === "loading"}
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
                value={emailData.subject}
                disabled={status.type === "loading"}
              />
            </div>
            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                rows={5}
                name="text"
                className="input-field"
                value={emailData.text}
                onChange={handleChange}
                disabled={status.type === "loading"}
              />
            </div>
            <button
              type="submit"
              className="sendMessage-btn"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 80px auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 500px;
    margin: 60px auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 40px auto;
    padding: 0 15px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 20px;
    padding: 0 2.5em 2em;
    background-color: black;
    border-radius: 20px;

    @media (max-width: 480px) {
      padding: 0 1.5em 1.5em;
      gap: 15px;
    }
  }

  .form-heading {
    text-align: center;
    margin: 2em 0 1em;
    color: #64ffda;
    font-size: 1.5em;
    font-weight: 600;
    background-color: transparent;
    align-self: center;

    @media (max-width: 480px) {
      font-size: 1.3em;
      margin: 1.5em 0 0.5em;
    }
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.8em;
    border: none;
    outline: none;
    color: white;
    background-color: white;
    box-shadow: inset 2px 2px 2px rgb(5, 5, 5);
    transition: all 0.3s ease;

    @media (max-width: 480px) {
      padding: 0.6em;
    }
  }

  .form-field:focus-within {
    box-shadow: inset 2px 2px 2px rgb(5, 5, 5),
      0 0 0 2px rgba(100, 255, 218, 0.3);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding: 0.5em;
    font-size: 1em;
    font-family: inherit;
    resize: vertical;

    @media (max-width: 480px) {
      font-size: 0.95em;
    }
  }

  .input-field::placeholder {
    color: #8892b0;
  }

  .input-field:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  textarea.input-field {
    min-height: 100px;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-top: 0.5em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #64ffda;
    font-weight: bold;
    font-size: 1em;
    outline: 2px solid #64ffda;
    transition: all ease-in-out 0.3s;

    @media (max-width: 480px) {
      padding: 0.8em;
      font-size: 0.95em;
    }
  }

  .sendMessage-btn:hover:not(:disabled) {
    transition: all ease-in-out 0.3s;
    background-color: #64ffda;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .sendMessage-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .status-message {
    padding: 1em;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
    font-size: 0.95em;

    @media (max-width: 480px) {
      padding: 0.8em;
      font-size: 0.9em;
    }
  }

  .status-message.success {
    background-color: rgba(100, 255, 218, 0.15);
    color: #64ffda;
    border: 1px solid #64ffda;
  }

  .status-message.error {
    background-color: rgba(255, 100, 100, 0.15);
    color: #ff6464;
    border: 1px solid #ff6464;
  }

  .status-message.loading {
    background-color: rgba(100, 200, 255, 0.15);
    color: #64c8ff;
    border: 1px solid #64c8ff;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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