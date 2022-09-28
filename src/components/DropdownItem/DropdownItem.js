import classNames from 'classnames/bind';

import styles from './DropdownItem.module.scss';
const cx = classNames.bind(styles);

const DropdownItem = (props) => {
    const defaultFn = () => {};
    const { icon, title, onClick = defaultFn } = props;
    return (
        <li className={cx('dropdownItem')} onClick={onClick}>
            <div className={cx('icon')}>{icon}</div>
            <span> {title} </span>
        </li>
    );
};

export default DropdownItem;
