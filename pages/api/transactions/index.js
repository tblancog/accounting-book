// Transactions API
let transactions = [];

/**
 *
 * @desc Post single transaction
 * @route POST api/transactions
 */

const postTransaction = (req, res) => {
  const newTransaction = JSON.parse(req.body);
  transactions = [newTransaction, ...transactions];
  res.json({ status: "Success" }, res.statusCode);
};

/**
 *
 * @desc Get all transactions
 * @route GET api/transactions
 */
const getTransactions = (_, res) => res.json(transactions, res.statusCode);

export default (req, res) => {
  res.statusCode = 200;

  if (req.method === "POST") {
    postTransaction(req, res);
  } else {
    getTransactions(req, res);
  }
};
