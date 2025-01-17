import { saveSessionData } from 'core/utils/auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import AuthCard from '../Card';
import ButtonIcon from './ButtonIcon';
import './styles.scss';

type FormState = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();
	const [hasError, setHasError] = useState(false);
	const history = useHistory();

  const onSubmit = (data: FormState) => {
		makeLogin(data)
			.then(response => {
				setHasError(false);
				saveSessionData(response.data);
				history.push('/movies');
			})
			.catch(() => {
				setHasError(true);
			});
	}

  return (
    <AuthCard title="login">
      {hasError && (
				<div className="alert alert-danger mt-5">
					Usuário ou senha inválidos!
				</div>
			)}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="margin-bottom-30">
          <input
            type="email"
            className="form-control input-base"
            placeholder="E-mail"
            name="username"
            ref={register({
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
          />
          {errors.username && (
						<div className="invalid-feedback d-block">
							{errors.username.message}
						</div>
					)}
        </div>
        <div className="margin-bottom-30">
          <input
            type="password"
            className={'form-control input-base'}
            placeholder="Senha"
            name="password"
            ref={register({ required: "Campo obrigatório" })}
          />
          {errors.password && (
						<div className="invalid-feedback d-block">
							{errors.password.message}
						</div>
					)}
        </div>
        <div className="login-submit">
          <ButtonIcon text="logar" />
        </div>
      </form>
    </AuthCard>
  );
}

export default Login;