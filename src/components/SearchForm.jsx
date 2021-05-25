import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { filterCharacters } from "../actions/actions";

const Header = styled.div`
  margin-top: 0.5rem;
  text-align: start;
`;

const Input = styled.input`
  border-radius: 1rem;
  font-size: 1.25rem;
  height: 3rem;
  width: 25rem;
  padding: 0 1rem;
`;

const Button = styled.input`
  border-radius: 1rem;
  height: 3rem;
  font-size: 1.25rem;
  margin: 0.5rem;
`;

const SearchForm = (props) => {
  const [inputValue, setInputValue] = React.useState("");
  const { characters, filterCharacters } = props;
  const onChange = (value) => {
    if (!value) filterCharacters("");
    setInputValue(value)
  }
  const enterSearch = (event) => {
    if (event.keyCode === 13) filterCharacters(inputValue)
  }
  return (
    <Header>
      <Input
        value={inputValue}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => enterSearch(event)}
      />
      <Button
        type="button"
        value="Search"
        onClick={() => filterCharacters(inputValue)}
      />
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCharacters: (parameters) => dispatch(filterCharacters(parameters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
