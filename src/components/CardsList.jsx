import React from "react";
import axios from "axios";
import Card from "./Card";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import { setCharacters } from "../actions/actions";
import { connect } from "react-redux";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Loader = styled.div`
  border: 1rem solid lightgray;
  border-top: 1rem solid gray;
  height: 10rem;
  width: 10rem;
  margin: 3rem;
  border-radius: 50%;
  animation: loader infinite 2s linear;
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CardsList = (props) => {
  const { characters, state, setCharacters } = props;
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://swapi.dev/api/people/");
        console.log(res);
        await setCharacters(res.data.results);
        console.log(characters);
        console.log(state);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container loader={characters.length < 1}>
      <SearchForm />
      {characters.length < 1 ? (
        <Loader loader />
      ) : (
        characters.map((character, index) => {
          return <Card characterIndex={index} />;
        })
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  setCharacters: (characters) => dispatch(setCharacters(characters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
