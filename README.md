# jest-newrelic

Add newrelic transaction to jest tests

## Getting Started

```shell
npm install --dev jest-newrelic
```

## Usage

Install as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFilesAfterEnv": [
    "jest-newrelic/setup"
  ]
}
```
