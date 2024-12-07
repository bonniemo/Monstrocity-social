Setting Up the OpenAI API Key

To use the OpenAI-powered features in this project, you need an API key from OpenAI. Follow these steps to set it up:

    Get Your API Key:
        Go to the OpenAI website and sign in or create an account.
        Navigate to the API Keys section in your account settings.
        Generate a new API key and copy it.

    Set the API Key as an Environment Variable:
        Open PowerShell on your computer.
        Run the following command, replacing your_api_key_here with your actual API key:

    setx OPENAI_API_KEY "your_api_key_here"

Restart Your Terminal or Editor:

    Close and reopen your PowerShell or IDE (e.g., VS Code) to ensure the environment variable is loaded.

Verify the Setup:

    Run this command in PowerShell to ensure the variable is set:

    echo $env:OPENAI_API_KEY

    It should display your API key (or part of it if your terminal masks it).

Access the API Key in Code:

    The project will automatically use the OPENAI_API_KEY environment variable. No further setup is required.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
