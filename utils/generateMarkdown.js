// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![GitHub license](https:/img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.github}/${data.title})


  ## User Story

  ${data.userStory}


  ## Table of Contents

  * [Installation](#installationInstructions)
  * [Usage](#usageInformation)
  * [Contribution Guidelines](#contributionGuidelines)
  * [Testing Instructions](#testInstructions)
  * [License](#license)
  * [GitHub Username](#github)
  * [Email Address](#email)
  

  ## Installation

  ${installationInstructions}


  ## Usage

  ${usageInformation}


  ## Contribution Guidelines

  ${contributionGuidelines}


  ## Testing Instructions

  ${testInstructions}


  ## License

  ${license}


  ## GitHub Username

  ${github}


  ## Email Address

  ${email}


`;
}

module.exports = generateMarkdown;
