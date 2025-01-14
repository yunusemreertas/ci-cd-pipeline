this is test readme
this is testtt

# CI/CD Pipeline for Tech Quiz App

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Walkthrough Video

Walkthrough video is in the repository.

## Description

This project showcases the implementation of a CI/CD pipeline for the Tech Quiz App, a full-stack web application. The pipeline includes GitHub Actions workflows to run Cypress component tests and deploy the app to Render. The app is built using React.js, Node.js, Express.js, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yunusemreertas/ci-cd-pipeline.git
   ```

2. Navigate to the project folder:

   ```bash
   cd ci-cd-pipeline
   ```

3. Install the project dependencies for both the client and server:

   - For the backend (server):

     ```bash
     cd server
     npm install
     ```

   - For the frontend (client):

     ```bash
     cd client
     npm install
     ```

4. Set up the MongoDB database:

   - Ensure MongoDB is installed and running on your local machine or connect to a cloud-hosted MongoDB instance.
   - Update the `.env` file in the server folder with your MongoDB connection string.

5. Seed the database (optional):

   ```bash
   npm run seed
   ```

6. Build and run the application:

   ```bash
   npm run build
   npm start
   ```

## Usage

1. Features include:

   - Start a quiz, answer multiple-choice questions, and track your score.
   - Reset and take the quiz again.

2. CI/CD Pipeline Features:
   - **Cypress Tests**: Automatically run Cypress component tests on pull requests to the `develop` branch.
   - **Render Deployment**: Deploy the app to Render when changes are merged into the `main` branch.

## License

This project is licensed under the MIT license.

## Contributing

Contributions are welcome! Feel free to submit a pull request or email me with your ideas.

## Tests

1. Run Cypress component tests locally:

   ```bash
   npm run test-component
   ```

2. Verify workflows:
   - Ensure the CI/CD workflows in the `.github/workflows` directory are functioning correctly.
   - Tests include:
     - Pull request testing to `develop` branch.
     - Deployment to Render on merging into `main` branch.

## Questions

If you have any questions, you can reach me at:

- GitHub: [yunusemreertas](https://github.com/yunusemreertas)
- Email: [yunus29emre@outlook.com](mailto:yunus29emre@outlook.com)
