import { apiCall } from "../services/";

import AppComponent from "../components/AppComponent";
const HomePage = (props) => <AppComponent {...props} />;
export default HomePage;

export const getServerSideProps = async () => ({
  props: {
    transactions: await apiCall(`${process.env.HOST}/api/transactions`),
  },
});
