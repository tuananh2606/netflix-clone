import classNames from 'classnames/bind';

import SlideList from '~/components/SlideList';
import styles from './SearchPage.module.scss';

const cx = classNames.bind(styles);

function SearchPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <SlideList heading="Movies"></SlideList>
            </div>
        </div>
    );
}

export default SearchPage;
