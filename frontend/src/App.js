
import './App.css';

import Header1 from './components/layout/Header1'
import Header2 from './components/layout/Header2'
import Footer from './components/layout/Footer'
import Home from './components/Home';
import Login from './components/user/Login'
import AboutUs from './components/AboutUs'

import Dashboard from './components/user/Dashboard'
import NewBlog from './components/user/NewBlog'
import BlogList from './components/user/BlogList'

import {BrowserRouter as Router} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header1/>
        <Header2/>
        <div className="container container-fluid">
        <Route  path="/" component={Home} exact/>
        <Route  path="/about" component={AboutUs} exact/>


        <Route  path="/login" component={Login} />

        
        </div>

          <div className="mt-1">
        <Route path="/dashboard" isAdmin={true}  component={Dashboard} exact />
        </div>
         
        <Route  path="/blog/new" component={NewBlog} exact/>
        <Route  path="/blog/articles" component={BlogList} exact/>

        <Footer/>

    </div>


        <Route  path="/login" component={Login} />
        </div>
        <Footer/>

    </div>

    </Router>
  );
}

export default App;
