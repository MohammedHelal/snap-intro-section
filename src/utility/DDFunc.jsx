//functions to change the styling of the drop down menus for desktop display

export function hideFeaturesDD() {
  let featuresDisplay = document.getElementById("features-dropdown");

  featuresDisplay.style.visibility = "hidden";
  featuresDisplay.style.opacity = 0;
  featuresDisplay.style.height = 0;
  featuresDisplay.style.padding = 0;
}

export function showFeaturesDD() {
  let featuresDisplay = document.getElementById("features-dropdown");

  featuresDisplay.style.visibility = "visible";
  featuresDisplay.style.opacity = 1;
  featuresDisplay.style.height = "auto";
  featuresDisplay.style.padding = "10px";
}

export function hideCompanyDD() {
  let companyDisplay = document.getElementById("company-dropdown");

  companyDisplay.style.visibility = "hidden";
  companyDisplay.style.opacity = 0;
  companyDisplay.style.height = 0;
  companyDisplay.style.padding = 0;
}

export function showCompanyDD() {
  let companyDisplay = document.getElementById("company-dropdown");

  companyDisplay.style.visibility = "visible";
  companyDisplay.style.opacity = 1;
  companyDisplay.style.height = "auto";
  companyDisplay.style.padding = "10px";
}
