import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Rodape>
      <FooterContent>
        <FooterMain>
          <LogoSection>
            <Logo src="/Ativo1.png" alt="Logo" />
            <div className="textofooter">
              <h3>Saulo Pavanello</h3>
              <TagLine>Transformando ideias em experiências digitais</TagLine>
            </div>
          </LogoSection>

          <FooterInfo>
            <ServicesSection>
              <h4>Serviços</h4>
              <ServicesList>
                <ServiceItem>
                  <FaCode /> Desenvolvimento Front-End
                </ServiceItem>
                <ServiceItem>
                  <FaPalette /> UI/UX Design
                </ServiceItem>
                <ServiceItem>
                  <FaCode /> Desenvolvimento React
                </ServiceItem>
                <ServiceItem>
                  <FaCode /> Front-End Mobile
                </ServiceItem>
              </ServicesList>
            </ServicesSection>

            <ContactSection>
              <h4>Contato</h4>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/MxSGameJPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub /> GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/saulopavanello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin /> LinkedIn
                </SocialLink>
                <SocialLink
                  href="https://www.instagram.com/mxsgamejps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram /> Instagram
                </SocialLink>
                <SocialLink
                  href="https://api.whatsapp.com/send?phone=5551993392983"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp /> WhatsApp
                </SocialLink>
                <SocialLink
                  href="mailto:saulopavanello@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope /> Email
                </SocialLink>
              </SocialLinks>
            </ContactSection>
          </FooterInfo>
        </FooterMain>

        <Divider />

        <Copyright>
          &copy; {currentYear} Saulo Pavanello. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </Rodape>
  );
}

const Rodape = styled.footer`
  background: var(--primary-color);
  padding: 3rem 0 2rem;
  width: 100%;
  color: #ffffff;
  position: relative;
  margin-top: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .textofooter {
    h3 {
      font-size: 1.5rem;
      margin: 0 0 0.5rem;
      color: var(--tertiary-color);
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(var(--tertiary-color-rgb), 0.4);

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const TagLine = styled.p`
  font-size: 1rem;
  color: #e6e6ff;
  margin: 0;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ServicesSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin: 0 0 1rem;
    color: var(--tertiary-color);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--tertiary-color);
    }
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #e6e6ff;

  svg {
    color: var(--tertiary-color);
  }
`;

const ContactSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin: 0 0 1rem;
    color: var(--tertiary-color);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: var(--tertiary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e6e6ff;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  svg {
    color: var(--tertiary-color);
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--tertiary-color);

    svg {
      transform: scale(1.2);
    }
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
