import { useCallback } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import { getAdvert, deleteAdvert } from '../service';
import useQuery from '../../../hooks/useQuery';
import useMutation from '../../../hooks/useMutation';

const AdvertPage = () => {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const getAdvertById = useCallback(() => getAdvert(advertId),[advertId]);
  // Aplicar método isLoading que viene del hook a la siguiente línea
  const { error, data: advert } = useQuery(getAdvertById);
  const mutation = useMutation(deleteAdvert);

  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate('/'));
  };

  if (error?.statusCode === 401 || mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Navigate to="/404" />;
  }

  return <>{advert && <AdvertDetail onDelete={handleDelete} {...advert} />}</>;
}

export default AdvertPage;
