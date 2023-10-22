import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Header.module.scss";
import LogoPSA from "../../assets/Logomarca_PSA.png";
import SubMenu from "../submenu/SubMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const submenuItems = [
    { label: "Submenu 1", to: "/vendas/submenu1" },
    { label: "Submenu 2", to: "/vendas/submenu2" },
  ];

  const handleSuportClick = () => {
    navigate("/suporte");
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_Content}>
        <a href="/">
          <img
            className={styles.header_ContentLogo}
            src={LogoPSA}
            alt="Logo PSA"
          ></img>
        </a>
        <nav
          className={`${styles.header_ContentNav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/vendas">Vendas</a>
              {menuOpen && size.width < 768 && <SubMenu items={submenuItems} />}
            </li>
            <li>
              <a href="/locacao">Locação</a>
            </li>
            <li>
              <a href="/datacenter">DataCenter</a>
            </li>
            <li>
              <a href="/servico">Serviços</a>
            </li>
            <li>
              <a href="/clientes">Clientes</a>
            </li>
            <li>
              <a href="/empresa">Empresa</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <button onClick={handleSuportClick}>Suporte</button>
            </li>
          </ul>
          {/* <button onClick={handleSuportClick}>Suporte</button> */}
        </nav>
        <div className={styles.header_ContentToggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
