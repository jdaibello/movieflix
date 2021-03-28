import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout();
  }

  return (
    <nav className="row bg-primary main-nav">
      <div className="col-6">
        <Link to={currentUser ? '/movies' : '/'} className="nav-logo-text">
          <h4>Movieflix</h4>
        </Link>
      </div>
      <div className="col-6 text-right">
        {currentUser && (
          <>
            <a
              href="#logout"
              className="btn btn-outline-dark border-radius-10"
              onClick={handleLogout}
            >
              SAIR
            </a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar;