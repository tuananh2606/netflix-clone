import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import MovieGrid from '~/components/MovieGrid';
import styles from './SearchPage.module.scss';

const cx = classNames.bind(styles);

function SearchPage() {
    const searchValue = useSelector((state) => state.search);

    return (
        <div className={cx('wrapper')}>
            <MovieGrid searchValue={searchValue} />
        </div>
    );
}

export default SearchPage;
