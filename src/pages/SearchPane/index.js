import classNames from 'classnames/bind';

import SlideList from '~/components/SlideList';
import styles from './SearchPanel.module.scss';

const cx = classNames.bind(styles);

function SearchPane() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <SlideList heading="Movies"></SlideList>
            </div>
        </div>
    );
}

export default SearchPane;
