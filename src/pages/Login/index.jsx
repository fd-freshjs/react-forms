import React from 'react';
import LoginForm from '../../components/LoginForm';

export function LoginPage() {
  return (
    <div>
        <header>
            <a href="/"><img src="" alt="" /></a>
            <a href="/reg">Регистрация</a>
        </header>
        <h2>
            Войдите в свой аккаунт
        </h2>
        <LoginForm />
    </div>
  )
}

// export default LoginPage;
