# PsyAi - Virtual Health Assistant

PsyAi is a sub-functionality of the upcoming project "PsyCheck - Mental Health Checking Tool". It is a virtual health assistant created using React and Vite, leveraging the Gemini API to provide users with a chatbot experience for obtaining information and assistance on various topics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install PsyAi, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/prit-nadoda/Ai-Health-Assistant-GEMNI-API-CHATBOT-REACTJS.git
    ```
2. Navigate to the project's root directory:
    ```bash
    cd Ai-Health-Assistant-GEMNI-API-CHATBOT-REACTJS
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

4. Obtain a Gemini API key:
   - Visit the [Gemini API website](https://ai.google.dev/).
   - Sign up or log in to your account.
   - Navigate to the API section and generate a new API key.
   - Copy the API key.

5. Open the configuration file `./src/config/AiAssistantScript.js` and paste your API key by locating the following line of code:
    ```javascript
    const apiKey = "Paste your API KEY here";
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

Once the development server is running, you can interact with PsyAi through the web interface. It functions like any other chatbot, allowing you to ask questions and receive information on various topics.

## Features

- **Virtual Health Assistant**: Provides mental health-related information and support.
- **Chatbot Functionality**: Ask questions and get responses in real-time.
- **Powered by Gemini API**: Leverages the Gemini API for enhanced capabilities.

## Contributing

We welcome contributions to PsyAi. To contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For further questions or issues, you can contact:

- Name: Prit Nadoda
- Email: [prit.nadoda.123@gmail.com](mailto:prit.nadoda.123@gmail.com)
- GitHub: [prit-nadoda](https://github.com/prit-nadoda)

---

Thank you for using PsyAi!
