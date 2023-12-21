import { BrowserRouter, Routes, Route } from 'react-router-dom'


//pages and component
import Home from './pages/Home'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Initializes the router */}
      <Navbar /> {/* Displays the Navbar component */}
        <div className='pages'>
          <Routes>
            <Route
              path='/' // Defines the route path
              element={ <Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
