import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '~/features/userSlice';
import { auth } from '~/firebase';
import { FaBars, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';

import DropdownItem from '~/components/DropdownItem';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [isOpen, setOpen] = useState(false);
    const [isNavExpand, setNavExpand] = useState(false);
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        // dispatch to the store with the logout action
        dispatch(logout());
        // sign out function from firebase
        auth.signOut();
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header__nav')}>
                    <Link to={'/'}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt="Netflix"
                        />
                    </Link>
                    <FaBars className={cx('bars')} onClick={() => setNavExpand(!isNavExpand)} />
                    <div className={cx(isNavExpand ? 'navbar-expand' : 'navbar')}>
                        <ul>
                            <li>
                                <NavLink className={cx('nav-link')} to={'/'} onClick={() => setNavExpand(false)}>
                                    Homepage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={cx('nav-link')} to={'/series'} onClick={() => setNavExpand(false)}>
                                    Series
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={cx('nav-link')} to={'/'}>
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={cx('nav-link')} to={'/'}>
                                    New and Popular
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={cx('nav-link')} to={'/'}>
                                    My List
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('header__action')}>
                    {currentUser ? (
                        <>
                            <Search />
                            <span>KID</span>
                            <IoMdNotificationsOutline className={cx('icon')} />
                            <div className={cx('profile')}>
                                <img
                                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </div>

                            <div className={cx('options-btn')}>
                                <IoMdArrowDropdown className={cx('icon')} onClick={() => setOpen(!isOpen)} />
                                <div className={cx('dropdown-menu', isOpen ? 'active' : 'inactive')}>
                                    <ul>
                                        <DropdownItem icon={<FaCog />} title={'Settings'} />
                                        <DropdownItem icon={<FaSignOutAlt />} title={'Logout'} onClick={logoutOfApp} />
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to={'/login'} className={cx('login-link')}>
                                Sign In
                            </Link>
                            <Link to={'/register'} className={cx('register-link')}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
