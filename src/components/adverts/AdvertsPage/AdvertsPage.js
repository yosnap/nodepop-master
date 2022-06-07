import React from 'react';
import { Navigate } from 'react-router-dom';

import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { getAdverts } from '../service';
import { defaultFilters, filterAdverts } from './filters';
import useQuery from '../../../hooks/useQuery';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

const AdvertsPage = () => {
  const { isLoading, error, data: adverts = [] } = useQuery(getAdverts);
  const [filters, setFilters] = React.useState(getFilters);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  if (error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  if(isLoading) {
    return <article aria-busy="true"></article>;
  }
  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    <div className='main-layout'>
      {adverts.length > 0 && (
        <aside className="p1">
          <FiltersForm
            initialFilters={filters}
            defaultFilters={defaultFilters}
            prices={adverts.map(({ price }) => price)}
            onFilter={setFilters}
          />
        </aside>
      )}
      {filteredAdverts.length ? (
        <div className="content">
          <AdvertsList adverts={filteredAdverts} />
        </div>
      ) : (
        <div className='content'>
          <EmptyList advertsCount={adverts.length} />
        </div>
      )}
    </div>
  );
}

export default AdvertsPage;
