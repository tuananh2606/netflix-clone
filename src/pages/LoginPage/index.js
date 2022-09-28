import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '~/firebase';
import { login } from '~/features/userSlice';

import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Sign in an existing user with Firebase
        signInWithEmailAndPassword(auth, email, password)
            // returns  an auth object after a successful authentication
            // userAuth.user contains all our user details
            .then((userAuth) => {
                // store the user's information in the redux state
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                    }),
                );
                navigate('/');
            })
            // display the error if any
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('img-background')}
                src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/e5b7469b-7098-4e7b-9830-6075c65a9d97/VN-en-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="Login Background"
            />
            <div className={cx('background')}></div>
            <div className={cx('login-container')}>
                <div className={cx('login-body')}>
                    <div className={cx('form-main')}>
                        <h1 className={cx('login-title')}>Sign In</h1>
                        <form method="post" className={cx('login-form')}>
                            <input
                                className={cx('email-input')}
                                type="email"
                                placeholder="Email"
                                autoComplete="on"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className={cx('password-input')}
                                type="password"
                                placeholder="Password"
                                autoComplete="on"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className={cx('signin-btn')} onClick={handleLogin}>
                                Sign In
                            </button>
                            <div className={cx('login-action')}>
                                <p>
                                    <input className={cx('remember')} type="checkbox" />
                                    Remember me
                                </p>
                                <p className={cx('help-link')}>Need Help?</p>
                            </div>
                            <p className={cx('login-other')}>
                                <span className={cx('login-redirect-span')}>New to Netflix? </span>
                                <Link className={cx('register-redirect')} to="/register">
                                    Sign up now
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
