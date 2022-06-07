import T from 'prop-types';

import useForm from '../../../hooks/useForm';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

const LoginForm = ({ onSubmit , isLoading }) => {
  
  const {
    formValue:values,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  
  const { email, password, remember } = values;

  return (
    <div className="grid-view">
      <article className="centered">
      <h1>Nodepop</h1>
      <form className="grid-center-content" onSubmit={handleSubmit(onSubmit)}>
        <input name="email" value={email} onChange={handleChange} placeholder="Correo electrónico" />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <label forHtml="remember">Recuerdame</label>
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
        <br/>
        <div className="mt-1">
          <button aria-busy={isLoading} disabled={!validate(validEmail, validPassword)}>Iniciar sesión</button>
        </div>
      </form>
      </article>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
