import React from 'react';
import { useForm } from 'react-hook-form';
import AuthCard from '../Card';
import ButtonIcon from './ButtonIcon';
import './styles.scss';

type FormState = {
  username: string;
  password: string;
}

const Login = () => {
  const { register } = useForm<FormState>();

  return (
    <AuthCard title="login">
      <form className="login-form">
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
        </div>
        <div className="margin-bottom-30">
          <input
            type="password"
            className={'form-control input-base'}
            placeholder="Senha"
            name="password"
            ref={register({ required: "Campo obrigatório" })}
          />
        </div>
        <div className="login-submit">
          <ButtonIcon text="logar" />
        </div>
      </form>
    </AuthCard>
  );
}

export default Login;