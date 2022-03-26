import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BiSearch } from 'react-icons/bi';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchBtnContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;

const Search = ({ setSearchValue }) => {
  const [value, setValue] = useState('');
  const onChangeSearch = (e) => {
    setValue(e.target.value);
  };

  const onSubmitSearch = () => {
    setSearchValue(value);
  };

  return (
    <SearchContainer>
      <input type="text" onChange={onChangeSearch} />
      <SearchBtnContainer>
        <BiSearch onClick={onSubmitSearch} />
      </SearchBtnContainer>
    </SearchContainer>
  );
};

export default Search;
