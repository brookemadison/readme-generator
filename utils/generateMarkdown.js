// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No license for me") {
    return '';
  }
  return '[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license for me"){
    return '';
  }
  return '* [License Info](#licenseInfo)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Screenshot
  ![screenshot](assets/images/${data.screenshot})
  

  ## Description
  ${data.description}

  ## Link to Deployed Application
  ${data.deployedlink}

  ## Table of Contents
  * [Description] (#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  <br />This application is covered by the ${data.license} license. 
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  Github: ${data.username}(https://github.com/${data.username})
  <br>
  Email me with any questions: ${data.email}
  
`;
}

module.exports = generateMarkdown;
