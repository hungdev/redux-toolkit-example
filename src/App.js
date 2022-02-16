import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Home from './features/Home'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
