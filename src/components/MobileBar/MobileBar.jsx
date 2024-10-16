import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/utils";
import "./MobileBar.css";

const MobileBar = () => {
  return (
    <div className="mobile-bar">
      <ul className="list-reset mobile-bar__list">
        {navLinks.map((link) => (
          <li
            className={link.isBlocked && "mobile-bar__blocked--item"}
            key={link.text}
          >
            {link?.isBlocked && (
              <div className="mobile-bar__blocked">{link.lockIcon} soon...</div>
            )}
            <NavLink
              className={(e) =>
                e.isActive ? "mobile-bar__link active" : "mobile-bar__link"
              }
              to={link.to}
            >
              {link?.icon}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileBar;
