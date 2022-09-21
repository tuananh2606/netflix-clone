import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';

import request from '~/utils/request';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
import styles from './Search.module.scss';
import { getSearchMovies } from '~/features/ApiRequest/searchSlide';

const cx = classNames.bind(styles);

const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);

    const dispatch = useDispatch();

    const searchResults = useSelector((state) => state.search);
    useEffect(() => {
        if (debouncedValue) {
            dispatch(getSearchMovies(debouncedValue));
            setSearchResult(searchResults.result);
        }
    }, [debouncedValue, dispatch]);

    // useEffect(() => {
    //     if (!debouncedValue.trim()) {
    //         setSearchResult([]);
    //         return;
    //     }

    //     const fetchApi = async () => {
    //         const data = await searchService.search(request.requestSearchMovies, debouncedValue);
    //         setSearchResult(data.results);
    //     };
    //     fetchApi();
    // }, [debouncedValue]);

    const handleClick = () => {
        setIsActive((current) => !current);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('search-box', isActive ? 'active' : '')}>
            <input
                className={cx(isActive ? 'active' : '')}
                type="text"
                placeholder="Search"
                onChange={handleChange}
            ></input>
            <div className={cx('search-icon')}>
                <AiOutlineSearch onClick={handleClick} />
            </div>
        </div>
    );
};

export default Search;
