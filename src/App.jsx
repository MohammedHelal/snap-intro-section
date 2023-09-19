import { useState } from "react";
import Navigation from "./components/Navigation";
import {
  hideFeaturesDD,
  showFeaturesDD,
  hideCompanyDD,
  showCompanyDD,
} from "./utility/DDFunc";
import "./App.css";

function App() {
  //state for the dropdown menus of the features and company
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  //state for the classes that open or close the side nav on the mobile display
  const [mobileclasses, setMobileClasses] = useState("");

  //closes the dropdown menus when main page is clicked
  function hideDropdown() {
    hideFeaturesDD();
    hideCompanyDD();
  }

  //function for the drop down menu buttons
  function clickHandler(event) {
    let id = event.target.id;

    if (id === "features") {
      featuresDropdown && hideFeaturesDD();
      !featuresDropdown && showFeaturesDD();

      setFeaturesDropdown((featuresDropdown) => !featuresDropdown);
    }

    if (id === "company") {
      companyDropdown && hideCompanyDD();
      !companyDropdown && showCompanyDD();

      setCompanyDropdown((companyDropdown) => !companyDropdown);
    }
  }

  //function for showing the side nav on mobile display
  function handleSideNav(event) {
    let id = event.target.id;

    if (id === "open") {
      setMobileClasses("mobile-open");
      overlayDisplay(true);
    } else {
      setMobileClasses("mobile-close");
      overlayDisplay(false);
    }
  }

  //function for displaying the overlay behind the side nav
  function overlayDisplay(isOpen) {
    let overlay = document.getElementById("overlay");
    if (isOpen) {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  }

  //closes the side nav when ever the overlay/the main screen is clicked
  function closeSideNav() {
    setMobileClasses("mobile-close");
    overlayDisplay(false);
  }

  return (
    <>
      <div id="overlay" onClick={closeSideNav} />
      <Navigation
        onClick={clickHandler}
        mobileclasses={mobileclasses}
        handleSideNav={handleSideNav}
      />
      <main onClick={hideDropdown}>
        <section className="right-main-side">
          <div>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button id="learn-more">Learn More</button>
          </div>
          <div className="icons-flex">
            <img src="./images/client-databiz.svg" alt="Databiz logo" />
            <img src="./images/client-audiophile.svg" alt="Audiophile logo" />
            <img src="./images/client-meet.svg" alt="Meet logo" />
            <img src="./images/client-maker.svg" alt="Maker logo" />
          </div>
        </section>
        <img
          className="left-image"
          src="./images/image-hero-desktop.png"
          alt="main image"
        />
      </main>
    </>
  );
}

export default App;
