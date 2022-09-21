import classNames from 'classnames/bind';
import Search from '../Search';
import { IoMdNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header__nav')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Netflix"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className={cx('header__action')}>
                    <Search />
                    <span>KID</span>
                    <IoMdNotificationsOutline className={cx('icon')} />
                    <div className={cx('profile')}>
                        <img
                            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </div>
                    <IoMdArrowDropdown className={cx('icon')} />
                    <div className="options">
                        {/* <span>Settings</span>
                        <span>Logout</span> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
