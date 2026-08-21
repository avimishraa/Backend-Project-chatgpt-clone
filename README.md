# 🤖 Backend Project — ChatGPT Clone

A backend REST API for an AI-powered conversational platform built with **Node.js, Express.js, MongoDB, and OpenRouter API**.

The project provides the backend architecture required for managing users, chats, messages, and AI-powered conversations through RESTful APIs.

## 🚀 Features

* User management
* JWT-based authentication
* User authorization and role management
* Streaming AI responses
* Conversation history
* Chat creation and management
* Message handling
* AI-powered responses using OpenRouter API
* RESTful API architecture
* MongoDB database integration
* Request validation
* Middleware-based architecture
* Modular project structure
* Environment variable configuration
* Error handling

## 🛠️ Tech Stack

* **Node.js** — JavaScript runtime
* **Express.js** — Backend web framework
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **OpenRouter API** — AI model integration
* **JavaScript (ES Modules)** — Application language
* **Nodemon** — Development server

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd Backend-Project-chatgpt-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

> Never commit your `.env` file or expose API keys publicly.

### 5. Start the development server

```bash
nodemon index.js
```

Or, if a start script is configured:

```bash
npm start
```

## 🔑 OpenRouter Integration

The project uses the **OpenRouter API** to generate AI responses.

The OpenRouter configuration is handled separately from the application logic:

```text
config/
└── openRouter.js
```

The service layer communicates with OpenRouter and provides AI responses to the application.

```text
Client
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
OpenRouter API
   │
   ▼
AI Response
```

### Routes

Responsible for defining API endpoints and connecting them to the appropriate controllers.

### Controllers

Handle incoming requests, validate application flow, and return responses to clients.

### Services

Contain reusable business logic, including communication with external services such as OpenRouter.

### Models

Define the database schemas for:

* Users
* Chats
* Messages

### Middlewares

Handle reusable request-processing logic such as authentication, validation, and error handling.

### Validators

Contain request validation logic to ensure incoming data follows the required structure.

### Utils

Contains reusable helper functions used throughout the application.

## 📡 API

The backend exposes RESTful APIs for managing:

* Users
* Chats
* Messages
* AI conversations

Use tools such as **Postman** or **Thunder Client** to test the APIs.

## 🧪 Testing

You can test the REST APIs using:

* Postman
* Thunder Client
* cURL

Example:

```bash
curl http://localhost:3000/
```

## 👨‍💻 Author

**Avinash Mishra**
