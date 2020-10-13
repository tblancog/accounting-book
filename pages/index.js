import AppComponent from "../components/AppComponent";
const HomePage = (props) => <AppComponent {...props} />;
export default HomePage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/api/transactions");
  const transactions = await res.json();
  return {
    props: {
      transactions,
    },
  };
}
