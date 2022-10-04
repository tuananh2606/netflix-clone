import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { category as cate } from '~/utils/request';
import MovieGrid from '~/components/MovieGrid';
import styles from './NavigationPage.module.scss';
import request from '~/utils/request';

const cx = classNames.bind(styles);

const NavigationPage = () => {
    let { category } = useParams();
    return (
        <div className={cx('wrapper')}>
            <MovieGrid
                request={category === cate.movie ? request.requestPopular : request.requestPopularTv}
                category={category}
            />
        </div>
    );
};

export default NavigationPage;
