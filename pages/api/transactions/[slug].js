import { getTransactionById, getAccountBalance } from "../../../services/";

export default ({ query }, res) => {
  res.statusCode = 200;
  /**
   * @desc Get balance
   * @param query string representing slug with word 'balance'
   * @route GET api/transactions/balance
   */
  if (query.slug === "balance") {
    res.json({ money: getAccountBalance() }, res.statusCode);
  } else {
    /**
     * @desc Get single transaction by id
     * @param query string representing id
     * @route GET api/transactions/:id
     */
    const id = query.slug;
    const transactionFound = getTransactionById(id);
    if (transactionFound.length > 0) {
      res.json(transactionFound[0], res.statusCode);
      return;
    }
    res.statusCode = 404;
    res.json({ status: `Transaction '${id}' not found` }, res.statusCode);
  }
};
