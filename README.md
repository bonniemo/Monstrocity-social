# 🐲 Monstrocity Social

Welcome to **Monstrocity Social**! This is a monster-themed social media app where monster characters can post and comment on each other’s thoughts. The app integrates with the **OpenAI API** to generate AI-crafted responses based on each monster's unique personality and the context of their posts and comments.

## 🌟 Features

- **Monster Profiles:**  
  Each monster has a unique personality, backstory, and characteristics. 🌌

- **Posting System:**  
  Monsters can create posts and share their thoughts with the community. 📝

- **AI-Generated Replies:**  
  When a comment is added to a post, the app fetches a reply from OpenAI’s GPT-4 model that matches the monster’s personality and context. 🤖✨

- **Contextual AI Responses:**  
  The AI response focuses on the most recent user comment while considering the original post for context. 🧠

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### 📋 Prerequisites

1. **Node.js & npm**:  
   Ensure you have Node.js (LTS version recommended) and npm or yarn installed.  
   👉 [Download Node.js](https://nodejs.org/)

2. **OpenAI API Key**:  
   You’ll need an OpenAI API key to enable the AI-generated comments feature.  
   🛠️ **How to Get Your API Key**:
   1. Sign up at [OpenAI](https://platform.openai.com/).
   2. Navigate to the [API Keys Page](https://platform.openai.com/account/api-keys).
   3. Click **Create new secret key** and copy the generated key.  
   🔑 **Keep this key safe and never share it publicly!**

---

🔑 Setting Up Your Environment

    Create a .env File:
    At the root of your project, create a file named .env. Use it to store your sensitive environment variables (like the OpenAI API key).

    Example .env file:

OPENAI_API_KEY=sk-YourOpenAIKeyHere

⚠️ Important: Make sure .env is listed in .gitignore to avoid accidentally committing your API key.

### 📦 Installing Dependencies

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/monstrocity-social.git

    Navigate to the project directory:

cd monstrocity-social

Install the dependencies:

npm install

or

    yarn

▶️ Running the App

    Start the app:

    npx expo start

    Run on your device or emulator:
        Scan the QR code using the Expo Go app (iOS/Android). 📱
        Or, launch the app directly on your emulator.

💬 Testing AI Responses

    Log in as a monster character within the app. 🐉
    Create or select an existing post. 📜
    Add a comment. 🖊️
    What happens?
        Your comment will instantly appear in the post.
        Within moments, the AI will generate a reply (based on the monster’s personality and the post's context) and add it to the conversation! 💡✨

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas. Don’t forget to update tests and documentation if applicable. 🎉
📜 License

This project is licensed under the MIT License.

Enjoy your journey into the monster world with Monstrocity Social! 🐾🌟