import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { getDetailsMovie } from '~/features/movieSlide';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

function ListItem(props) {
    const { data, imageUrl } = props;

    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')} onClick={() => dispatch(getDetailsMovie(data))}>
                <img className={cx('image')} src={imageUrl} alt="Ảnh" />
                <div className="card-body">
                    <div className={cx('title')}>{data.title || data.name}</div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
