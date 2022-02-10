import React, { useEffect, useState } from 'react';
import './Header.css'
import { MenuItems} from '../../data/data';
import TextAnimation from '../animations/TextAnimation';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Fade } from 'react-reveal';
const Header = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(MenuItems);
  }, [items]);
  
  return (
    <header className="header fixed">
      <div className="container">
        <div className="header__inner">
          <Fade left>
            <div className="logo">
              <TextAnimation text={"RJSD"} />
            </div>
          </Fade>
            <nav className="menu">
              <ul className={open ? "menu__list active" : "menu__list"}>
                {items.map(({ text, id, url }) => (
                  <li key={id} className="menu__item">
                      <a href={url}>
                        {text}
                      </a>
                  </li>
                ))}
              </ul>
            </nav>
          <MenuOutlinedIcon
            className="header__button"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;