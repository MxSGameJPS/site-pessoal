import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbenndk");

  if (state.succeeded) {
    return <StyledSuccess>Obrigado pelo contato! Entrarei em breve.</StyledSuccess>;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" required />
      <ValidationError prefix="Nome" field="nome" errors={state.errors} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #fff;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
  }

  button {
    padding: 10px;
    background-color: #867307;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #041f96;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media (max-width: 1024px) {
    padding: 15px;
    gap: 12px;
    max-width: 400px;

    label {
      font-size: 14px;
    }

    input,
    textarea {
      padding: 8px;
      font-size: 12px;
    }

    button {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

const StyledSuccess = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export default ContactForm;