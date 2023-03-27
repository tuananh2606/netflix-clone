import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

function ListItem(props) {
    const { data, imageUrl, category } = props;

    const link = `/${data.media_type ? data.media_type : category}/${data.id}`;

    return (
        <Link to={link}>
            <div className={cx('wrapper')}>
                <div className={cx('card')}>
                    <LazyLoadImage
                        className={cx('image')}
                        alt="Ảnh"
                        effect="blur"
                        src={imageUrl} // use normal <img> attributes as props
                    />
                    {/* <img className={cx('image')} src={imageUrl} alt="Ảnh" loading="lazy" width="1rem" height="1rem" /> */}
                    <div className="card-body">
                        <div className={cx('title')}>{data.title || data.name}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ListItem;
