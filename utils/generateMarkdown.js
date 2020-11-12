// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  ---
  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ---

  ## Descritption

  ${data.descritption}

  ---

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usageInformation)
  * [Contribution Guidelines](#contributionGuidelines)
  * [Testing Instructions](#testInstructions)
  * [License](#license)
  * [GitHub Username](#github)
  * [Email Address](#email)
  
  ---

  ## Installation

  ${data.installation}

  ---

  ## Usage

  ${data.usageInformation}

  ---

  ## Contribution Guidelines

  ${data.contribution}

  ---

  ## Testing Instructions

  ${data.testInstructions}

  ---
 
  ## GitHub Username

  ${data.github}

  ---

  ## Email Address

  ${data.email}

  
`;
}

module.exports = generateMarkdown;
