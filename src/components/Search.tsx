import React from 'react';

import '../css/search.css';
import searchIcon from '../images/svg/search-icon.svg';

type searchProps = {
    searchTerm,
    setSearchTerm
};

const Search = (props: searchProps) => {

    const {searchTerm, setSearchTerm} = props;

    return (
        <form action="" className="search">
            <input
                type="text"
                placeholder="Поиск"
                className="search__type-field"
                value={searchTerm}
                autoFocus
                autoComplete='off'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search__button">
                <img src={searchIcon} alt="Иконка лупы" className="search__icon" />
            </button>
        </form>
    );
}

export default Search;