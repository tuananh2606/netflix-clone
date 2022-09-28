/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <a className={cx('title')} href="#">
                    Questions? Contact us.
                </a>
                <div className={cx('list')}>
                    <div className={cx('column')}>
                        <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a>
                    </div>
                    <div className={cx('column')}>
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookies Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>
                    <div className={cx('column')}>
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                    </div>
                    <div className={cx('column')}>
                        <a href="#">Media Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
