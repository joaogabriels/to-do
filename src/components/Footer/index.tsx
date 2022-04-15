/* eslint-disable react/jsx-no-target-blank */
import { FooterSection } from "./styles";

export function Footer() {
  return (
    <FooterSection>
      <div>
        <p className="copyright-text">Site desenvolvido por João Evangelista</p>
      </div>

      <div className="social-icons">
        <a
          className="instagram"
          href="https://www.instagram.com/joao.gbrie/"
          target="_blank"
        >
          <i className="fa fa-instagram"></i>
        </a>

        <a
          className="linkedin"
          href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-48592718a/"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>

        <a
          className="github"
          href="https://github.com/joaogabriels"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </FooterSection>
  );
}
