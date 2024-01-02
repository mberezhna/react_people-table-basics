import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getLincClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item',
  { 'has-background-grey-lighter': isActive },
);

export const Navigation = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={getLincClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/people"
            className={getLincClass}
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};