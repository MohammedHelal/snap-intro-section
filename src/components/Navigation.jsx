import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import PropTypes from "prop-types";
import "./Navigation.css";

function Navigation({
  onClick,
  mobileclasses,
  handleSideNav,
  featuresDD,
  companyDD,
}) {
  return (
    <header>
      <nav>
        <img className="logo" src="./images/logo.svg" alt="snap logo" />
        <MainNav
          mobileclasses={mobileclasses}
          handleSideNav={handleSideNav}
          onClick={onClick}
          featuresDD={featuresDD}
          companyDD={companyDD}
        />
      </nav>
      <MobileNav handleSideNav={handleSideNav} />
    </header>
  );
}

Navigation.propTypes = {
  onClick: PropTypes.func,
  overlayDisplay: PropTypes.func,
  mobileclasses: PropTypes.string,
  handleSideNav: PropTypes.func,
  featuresDD: PropTypes.bool,
  companyDD: PropTypes.bool,
};

export default Navigation;
