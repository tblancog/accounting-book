import { transactions, addTransaction } from "../../../services/";
/**
 *
 * @desc Get all transactions
 * @route GET api/transactions
 */
const getTransactions = (_, res) => res.json(transactions, res.statusCode);

/**
 *
 * @desc Post single transaction
 * @route POST api/transactions
 */
const postTransaction = ({ body }, res) => {
  let status = {};
  // console.log(body);
  // return;

  try {
    const result = addTransaction(body);
    if (!result) {
      res.statusCode = 403;
      status = { status: "Forbidden operation" };
    } else {
      status = result;
    }
  } catch (err) {
    res.statusCode = 500;
    status = { status: `Error ${err}` };
    console.error(status, res.statusCode);
  }
  res.json(status, res.statusCode);
};

export default (req, res) => {
  res.statusCode = 200;
  if (req.method === "POST") {
    postTransaction(req, res);
  } else {
    getTransactions(req, res);
  }
};
