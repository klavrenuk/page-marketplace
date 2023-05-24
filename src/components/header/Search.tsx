import React, {useRef} from 'react';

import './styles/search.css';

const Search = () => {
    const searchText = useRef<string>('');

    const onChange = (event:any) => searchText.current = event.target.value;

    const search = () => console.log('search...', searchText);

    return (
        <div className={'search'}>
            <input id="Search" className="border border-2 search-input w-full"
                   type="text"
                   placeholder="Искать товары"
                   onChange={(event) => onChange(event)}
            />
            <button className={'text-center search-btn'} onClick={search}>
                <svg className={'search-btn-icon'} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99228 15C12.8583 15 15.9923 11.866 15.9923 8C15.9923 4.13401 12.8583 1 8.99228 1C5.12629 1 1.99228 4.13401 1.99228 8C1.99228 11.866 5.12629 15 8.99228 15Z" stroke="black" strokeWidth="2"/>
                    <path d="M13.9923 13L18.9923 18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    )
}

export default Search;