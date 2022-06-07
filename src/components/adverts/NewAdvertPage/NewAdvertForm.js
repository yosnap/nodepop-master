import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import { InputFile } from '../../common';
import SelectTags from '../SelectTags';

const validName = ({ name }) => name;
const validPrice = ({ price }) =>
  !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
const validTags = ({ tags }) => !!tags.length;

const NewAdvertForm = ({ onSubmit }) => {
  const {
    formValue: advert,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    name: '',
    sale: true,
    price: null,
    tags: [],
    photo: null,
  });
  const { name, sale, price, tags } = advert;

  return (
    <div className='center-content'>
      <article>
      <p><strong>Registre un anuncio</strong></p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" value={name} onChange={handleChange} placeholder="Nombre" />
      <div className="field">
        <label forHtml="sale">En venta </label>
        <input
          id="sale"
          type="checkbox"
          name="sale"
          checked={sale}
          onChange={handleChange}
        />
      </div>
      <br/>
      <input type="number" name="price" value={price} onChange={handleChange} placeholder="precio" />
      <SelectTags name="tags" value={tags} onChange={handleChange}  />
      <InputFile name="photo" onChange={handleChange} />
      <hr/>
      <button disabled={!validate(validName, validPrice, validTags)}>
        Registrar
      </button>
    </form>
      </article>
    </div>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
