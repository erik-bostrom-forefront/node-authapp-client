import './App.css';
import UserRoutes from './Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import {Container} from '@mui/material'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container maxWidth='sm'>
          <UserRoutes />
        </Container>
      </div>
    </Router>
  );
}

export default App;
