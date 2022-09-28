import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '~/firebase';
import { login } from '~/features/userSlice';

import styles from './RegisterPage.module.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // A quick check on the name field to make it mandatory
    const hanldeRegister = (e) => {
        e.preventDefault();
        // Create a new user with Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                // Dispatch the user information for persistence in the redux state
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                    }),
                );
                navigate('/');
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('img-background')}
                src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/e5b7469b-7098-4e7b-9830-6075c65a9d97/VN-en-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="R Background"
            />
            <div className={cx('background')}></div>
            <div className={cx('register-container')}>
                <div className={cx('register-body')}>
                    <div className={cx('form-main')}>
                        <h1 className={cx('register-title')}>Sign Up</h1>
                        <form method="post" className={cx('register-form')}>
                            <input
                                className={cx('email-input')}
                                value={email}
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className={cx('password-input')}
                                value={password}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className={cx('register-btn')} onClick={hanldeRegister}>
                                Sign Up
                            </button>
                            <div className={cx('register-action')}>
                                <p>
                                    <input className={cx('remember')} type="checkbox" />
                                    Remember me
                                </p>
                                <p className={cx('help-link')}>Need Help?</p>
                            </div>
                            <p className={cx('register-other')}>
                                <span className={cx('register-redirect-span')}>Already subscribed to Netflix? </span>
                                <Link className={cx('login-redirect')} to="/login">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
