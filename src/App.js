import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import Categories from './components/Categories';
import BookForm from './components/inputBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="nav-bar">
          <nav className="main-nav">
            <h1>Bookstore CMS</h1>
            <ul className="navigation-list">
              <li>
                <Link to="/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/books" element={<BookForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
