
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents\n
  [Description](#description)\n
  [Application](#application)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Questions](#questions)\n
  ## Description\n${data.description}\n
  ## Licenses\n${data.license}\n
  ## Application\n${data.reason}\n
  ## Installation\n${data.install}\n
  ## Usage\n${data.usage}\n
  ## Contributing\n${data.partners}\n
  
  ## Questions
  https://github.com/${data.user} \n
  You can contact me at: ${data.email}
`;
}

module.exports = generateMarkdown;
