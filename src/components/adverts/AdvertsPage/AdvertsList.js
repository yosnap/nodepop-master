import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { advert } from '../propTypes';

function Advert({ name, sale, price, tags }) {
  return (
    <div>
      <p>{name}</p>
      <p>{sale ? 'Sell' : 'Buy'}</p>
      <p>{tags.join(', ')}</p>
      <p>{price}</p>
    </div>
  );
}

Advert.propTypes = {
  ...advert,
};

const AdvertsList = ({ adverts }) => {
  const renderAdvert = ({ id, ...advert }) => (
    <li key={id} class="card">
      <article>
      <Link to={`/adverts/${id}`}>
        <Advert {...advert} />
      </Link>
      </article>
    </li>
  );

  return (
    <ul className='auto-grid'>{adverts.map(renderAdvert)}</ul>
  );
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({ id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;
