import React from 'react';
import T from 'prop-types';

import { ConfirmationButton } from '../../common';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';

const AdvertDetail = ({ name, sale, price, tags, photo, onDelete }) => {
  return (
    <div className="center-content">
      <article className='p2 w-80'>
        <p>{name}</p>
        <p>{sale ? 'Sell' : 'Buy'}</p>
        <p>{tags.join(', ')}</p>
        <p>{price}</p>
        <img
          src={photo || placeholder}
          alt={name}
          width="200"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <hr/>
        <div>
          <ConfirmationButton confirmation="¿Deseas eliminar este anuncio?" onConfirm={onDelete}>
            Eliminar
          </ConfirmationButton>
        </div>
      </article>
    </div>
  );
}

AdvertDetail.propTypes = {
  ...advert,
  photo: T.string,
  onDelete: T.func.isRequired,
};

AdvertDetail.defaultProps = {
  photo: null,
};

export default AdvertDetail;
