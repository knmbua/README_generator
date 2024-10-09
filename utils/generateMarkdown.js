function renderLicenseBadge(license) {
    if (!license || license === 'None') {
        return '';
    }
    const badges = {
        'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
    };
    return badges[license] || '';
}

function renderLicenseLink(license) {
    if (!license || license === 'None') {
        return '';
    }
    const links = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
    };
    return links[license] || '';
}

function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return '';
    }
    const licenseLink = renderLicenseLink(license);
    return `## License

This project is licensed under the ${license} License. For more information, please visit [this link](${licenseLink}).
`;
}

function generateMarkdown(data) {
    return `# ${data.title || ''}

${renderLicenseBadge(data.license)}

## Description
${data.description || ''}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation || ''}

## Usage
${data.usage || ''}

## Credits
${data.credits || ''}

${renderLicenseSection(data.license)}

## Tests
${data.tests || ''}

## Questions
Any additional questions, please email: ${data.email || ''}
`;
}

export default generateMarkdown;
