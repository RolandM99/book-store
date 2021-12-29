import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
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
            <h1>BookStore CMS</h1>
            <ul className="navigation-list">
              <li>
                <Link to="/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
          <span className="user-profile-wrapper d_flex">
            <FaUserAlt style={{
              color: '#0290ff',
              height: '25px',
              bottom: '10px',
              cursor: 'pointer',
              transition: 'all ease-in 300ms',
            }}
            />
          </span>
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
