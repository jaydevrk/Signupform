
import SignIn from './SignIn';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home';
function App() {
  return (
    <Router>
      <Route path ='/'>

      <SignIn/>
      </Route>
      {/* <Route exact path='/'>
        <Home></Home>
      </Route> */}

    </Router>
  );
}

export default App;
