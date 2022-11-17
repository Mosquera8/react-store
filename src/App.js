import { Provider } from 'react-redux';
import './App.css';
import CrudApi from "./components/CrudApi"
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <CrudApi />
      </div>
    </Provider>
  );
}
// Para correr la api utilizar npm run fake-api
// npm install @reduxjs/toolkit react-redux
// npm install react-redux
export default App;
