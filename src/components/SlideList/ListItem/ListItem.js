import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

function ListItem({ data, imageUrl }) {
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
