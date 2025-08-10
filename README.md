# Serverless Boilerplate with Serverless Framework 3, Fastify, TypeScript, Prisma and MongoDB

🚀 Serverless Boilerplate is starter code for your backend and REST API based on Serverless framework with Fastify, TypeScript, Prisma and MongoDB. ⚡️ Made with Serverless framework, Live reload, Offline support, Fastify, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Commitlint, Dotenv, VSCode.

Clone this project and use it to create your own backend.

> About this variant
>
> This repository is a derivative of the excellent Serverless Boilerplate originally authored by CreativeDesignsGuru (ixartz), which used Express. This version is intended to specifically demonstrate integrating Fastify in place of Express while keeping the same tooling and developer experience.

### Features

Developer experience first:

- 🔥 [Serverless framework](https://www.serverless.com)
- ⚡️ [Fastify](https://fastify.dev)
- ✅ Type checking [TypeScript](https://www.typescriptlang.org) with strict mode
- 📚 ORM with [Prisma](https://www.prisma.io)
- 💖 Database with [MongoDB](https://www.mongodb.com/) with in-memory database for local development
- 📏 Linter with [ESLint](https://eslint.org) with Airbnb configuration
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit testing with Jest and Supertest for integration testing
- 👷 Run tests on pull request with GitHub Actions
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using @ prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest
- 📖 Local support with Serverless Offline
- ⚙️ Environment variable with Serverless Dotenv
- 🎉 Fast bundler with esbuild
- ✨ HTTP Api instead of API gateway for cost optimization
- 💨 Live reload

### Philosophy

- Minimal code
- 🚀 Production-ready


### Requirements

- Node.js 20+ and Yarn (Yarn 3+ via Corepack is supported)

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/oz6269/Serverless-Boilerplate-Fastify-TypeScript.git my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

The local server is now listening at http://localhost:4000

### Deploy to production

You can deploy to production with the following command:

```
yarn deploy-prod
```

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Originally Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

Forked by [oz6269](https://github.com/oz6269) | [Chris Osborn](https://christopherosborn.com)
