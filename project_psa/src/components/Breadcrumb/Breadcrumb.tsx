import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ul className={styles.breadcrumb_list}>
        <li>
          <Link to="/">Início</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={name}>{name}</li>
          ) : (
            <li key={name}>
              <Link to={routeTo}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
