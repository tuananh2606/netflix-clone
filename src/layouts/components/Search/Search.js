import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { getSearchMovies } from '~/features/ApiRequest/searchSlide';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 500);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        // if (!debouncedValue.trim()) {
        //     setSearchResult([]);
        //     return;
        // }
        if (debouncedValue) {
            dispatch(getSearchMovies(debouncedValue));
        }
    }, [debouncedValue, dispatch]);

    const handleClick = () => {
        setIsActive((current) => !current);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value.trimStart();
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            navigate(`/search`);
        }
        if (searchValue === '') {
            navigate(`/`);
        }
    };

    return (
        <div className={cx('search-box', isActive ? 'active' : '')}>
            <input
                className={cx(isActive ? 'active' : '')}
                type="text"
                placeholder=" Search"
                onChange={handleChange}
            ></input>
            <div className={cx('search-icon')}>
                <AiOutlineSearch onClick={handleClick} />
            </div>
        </div>
    );
};

export default Search;
