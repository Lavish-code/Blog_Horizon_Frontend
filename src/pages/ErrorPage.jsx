import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className='btn primary'>Go Back Home</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
