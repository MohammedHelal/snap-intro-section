import PropTypes from "prop-types";

function MobileNav({ handleSideNav }) {
  return (
    <nav>
      <img className="logo" src="./images/logo.svg" alt="snap logo" />
      <img
        id="open"
        src="./images/icon-menu.svg"
        alt="menu button"
        onClick={handleSideNav}
      />
    </nav>
  );
}

MobileNav.propTypes = {
  handleSideNav: PropTypes.func,
};

export default MobileNav;
