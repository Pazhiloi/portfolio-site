import React from 'react';
import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TextAnimation from '../animations/TextAnimation';
import { Fade } from 'react-reveal';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Fade bottom>
            <h2 className="footer__title title" id="contacts">
              <TextAnimation text="Contacts" />
            </h2>
          </Fade>

          <div className="footer__items">
            <Fade left>
              <div className="footer__item">
                <a
                  href="https://t.me/Mvlass"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <TelegramIcon />
                </a>
              </div>
            </Fade>
            <Fade bottom>
              <div className="footer__item">
                <a
                  href="https://github.com/Pazhiloi"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <GitHubIcon />
                </a>
              </div>
            </Fade>
            <Fade right>
              <div className="footer__item">
                <a
                  href="https://www.instagram.com/miroslavmiroslav63/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <InstagramIcon />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;