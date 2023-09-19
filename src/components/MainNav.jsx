import PropTypes from "prop-types";

function MainNav({ mobileclasses, handleSideNav, onClick }) {
  return (
    <ul id="main-nav" className={"nav-list " + mobileclasses}>
      {/*the close button for the side nav on the mobile display, the button is only visible on mobile display*/}
      <li id="close" className="close-btn" onClick={handleSideNav}>
        <img src="./images/icon-close-menu.svg" alt="sidebar close" />{" "}
      </li>
      <li id="features" className="dropdown-head nav-link" onClick={onClick}>
        Features
      </li>
      <ul id="features-dropdown" className="dropdown-menu">
        <li>
          <img src="./images/icon-todo.svg" alt="" /> Todo List
        </li>
        <li>
          <img src="./images/icon-calendar.svg" alt="" /> Calendar
        </li>
        <li>
          <img src="./images/icon-reminders.svg" alt="" /> Reminders
        </li>
        <li>
          <img src="./images/icon-planning.svg" alt="" /> Planning
        </li>
      </ul>
      <li id="company" className="dropdown-head nav-link" onClick={onClick}>
        Company
      </li>
      <ul id="company-dropdown" className="dropdown-menu">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
      <li className="nav-link">Careers</li>
      <li className="nav-link">About</li>
      <li className="nav-link flex-right">Login</li>
      <li className="nav-link register">Register</li>
    </ul>
  );
}

MainNav.propTypes = {
  mobileclasses: PropTypes.string,
  handleSideNav: PropTypes.func,
  onClick: PropTypes.func,
};

export default MainNav;
