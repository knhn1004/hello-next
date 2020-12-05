import './main.css'; // we can only import global css here

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
