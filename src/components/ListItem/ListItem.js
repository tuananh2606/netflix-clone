import { createContext } from 'react';
import classNames from 'classnames/bind';

import styles from './ListItem.module.scss';

export const MovieContext = createContext();
const cx = classNames.bind(styles);

function ListItem(props) {
    const { data, imageUrl } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')}>
                <img className={cx('image')} src={imageUrl} alt="Ảnh" />
                <div className="card-body">
                    <div className={cx('title')}>{data.title || data.name}</div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
