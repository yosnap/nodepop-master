import React from 'react';
import T from 'prop-types';

import { Link } from 'react-router-dom';

const EmptyList = ({ advertsCount }) => {
  return (
    <div className='grid-center'>
      <article>
        <p>No hay anuncios</p>
        {advertsCount > 0 ? (
          'Intenta con otros filtros'
        ) : (
          <Link role="button" to="/adverts/new">Agrega el primer anuncio</Link>
        )}
      </article>
    </div>
  );
}

EmptyList.propTypes = {
  advertsCount: T.number.isRequired,
};

export default EmptyList;
