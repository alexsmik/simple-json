import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>page not found</p>
      <Link to="https://alexsmik.github.io/redux-toolkit-shopping-cart/">
        back home
      </Link>
    </section>
  );
};
export default Error;
