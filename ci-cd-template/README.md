# CI/CD Ready Node.js API Template

A template for Node.js API projects with CI/CD pipeline using GitHub Actions.

## Features

- Express.js server
- ESLint for code quality
- Mocha & Chai for testing
- GitHub Actions for CI/CD
- Pre-configured scripts

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with ESLint

## CI/CD

The GitHub Actions workflow includes:
- Linting
- Testing
- (Example) Deployment to Vercel/Netlify

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Testing

Run tests with:
```bash
npm test
```

## Linting

Check code quality with:
```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run format
```
