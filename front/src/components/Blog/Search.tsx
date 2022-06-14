import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';

const SearchContainer = styled.div`
  position: relative;

  input {
    width: 150px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;

    @media ${(props) => props.theme.MOBILE} {
      width: 200px;
    }

    &:focus {
      outline: none;
    }
  }
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
