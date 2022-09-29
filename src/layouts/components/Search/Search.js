import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { getSearchMovies } from '~/features/searchSlide';

const cx = classNames.bind(styles);

const Search = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 500);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            navigate('/');
        }
    };
    return (
        <>
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
        </>
    );
};

export default Search;
