# Accounting Book

Accounting Book is a challenge app made with NextJS on top of React and NodeJS as backend. It exposes a SPA and api with four endpoints.

## Installation

Use npm to build and serve the app in the default port of 3001.

```bash
npm run build
npm run start
```

## Usage

Point your browser to http://localhost:3001 for frontend and for backend use a tool like POSTMAN to hit api endpoints:

- Get transactions:
  `GET http://localhost:3001/api/transactions`
- Commit transactions:
  `POST http://localhost:3001/api/transactions { "amount": 4000, "description": "Earnings", "type": "credit" } `

- Get transaction by id:
  `GET http://localhost:3001/api/transactions/:id`

- Get balance:
  `GET http://localhost:3001/api/transactions/balance`

## License

[MIT](https://choosealicense.com/licenses/mit/)
