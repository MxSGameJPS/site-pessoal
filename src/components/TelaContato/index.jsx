import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbenndk");

  if (state.succeeded) {
    return (
      <StyledSuccess>
        <div className="success-icon">✓</div>
        <h3>Mensagem enviada com sucesso!</h3>
        <p>Obrigado pelo contato! Retornarei em breve.</p>
      </StyledSuccess>
    );
  }

  return (
    <FormContainer>
      <h2>Envie uma mensagem</h2>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="nome">Nome</label>
          <StyledInput
            id="nome"
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            required
          />
          <ValidationError prefix="Nome" field="nome" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <StyledInput
            id="email"
            type="email"
            name="email"
            placeholder="exemplo@email.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="assunto">Assunto</label>
          <StyledInput
            id="assunto"
            type="text"
            name="assunto"
            placeholder="Assunto da mensagem"
            required
          />
          <ValidationError
            prefix="Assunto"
            field="assunto"
            errors={state.errors}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="message">Mensagem</label>
          <StyledTextarea
            id="message"
            name="message"
            placeholder="Descreva seu projeto ou dúvida..."
            rows="5"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={state.submitting}>
          {state.submitting ? "Enviando..." : "Enviar mensagem"}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100%;
  background: rgba(5, 22, 53, 0.9);
  border-radius: 16px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--tertiary-color);
    text-align: left;
  }

  @media (max-width: 992px) {
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin-left: 0.2rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: -0.2rem;
    }
  }
`;

const StyledInput = styled.input`
  padding: 0.8rem 1rem;
  background-color: rgba(255, 255, 255, 0.98);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: #222;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--tertiary-color), 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #888;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 6px;

    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  background-color: rgba(255, 255, 255, 0.98);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 90px;
  transition: all 0.3s ease;
  color: #222;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--tertiary-color), 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #888;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.8rem;
    font-size: 0.9rem;
    min-height: 80px;
    border-radius: 6px;

    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  margin-top: 0.5rem;
  background: linear-gradient(90deg, var(--tertiary-color), #3a6cbf);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.03em;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    background: linear-gradient(90deg, #3a6cbf, var(--tertiary-color));
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.95rem;
    margin-top: 0.25rem;
    border-radius: 6px;
  }
`;

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(5, 22, 53, 0.9);
  border-radius: 16px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;

  .success-icon {
    width: 70px;
    height: 70px;
    background: var(--tertiary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 20px rgba(var(--tertiary-color-rgb), 0.5);
  }

  h3 {
    font-size: 1.5rem;
    color: var(--tertiary-color);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #e6e6ff;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;

    .success-icon {
      width: 60px;
      height: 60px;
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default ContactForm;
