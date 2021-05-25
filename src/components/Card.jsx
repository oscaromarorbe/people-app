import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeCharacter } from "../actions/actions";

const fontFamily = "Arial";

const Row = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 1rem;
  border-style: solid;
  border-width: 2px;
  box-shadow: 5px 5px 0px lightgray;
  display: ${(props) => (!props.filteredOut ? "flex" : "none")};
  justify-content: space-between;
`;

const Col = styled.div`
  height: auto;
  width: ${(props) => (props.data ? "50%" : "auto")};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.data ? "left" : "right")};
`;

const Button = styled.button`
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 1rem;
  font-size: 1.25rem;
`;

const Data = styled.span`
  font-family: ${fontFamily};
  font-size: ${(props) => (props.fName ? "2rem" : "1.25rem")};
  padding-left: ${(props) => (props.fName ? "1rem" : 0)};
  line-height: 2rem;
`;

const Label = styled.label`
  font-family: ${fontFamily};
  font-size: 1.25rem;
  padding-left: 1rem;
`;

const Card = (props) => {
  const { currentCharacter, filteredOutNames, features, removeCharacter } =
    props;
  const rearrangeFeature = (feature) => {
    return (feature[0].toUpperCase() + feature.slice(1)).replace(/_/, " ");
  };
  return (
    <Row
      filteredOut={filteredOutNames.includes(
        currentCharacter.name.toLowerCase()
      )}
    >
      <Col data>
        <Data fName>{currentCharacter.name}</Data>
        {features.map((feature, index) => (
          <Label for={feature + index}>
            {rearrangeFeature(feature) + ": "}
            <Data id={feature}>{currentCharacter[feature]}</Data>
          </Label>
        ))}
      </Col>
      <Col>
        <Button
          type="button"
          onClick={() => removeCharacter(currentCharacter.name)}
        >
          Eliminar
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentCharacter: state.characters[ownProps.characterIndex],
    filteredOutNames: state.filteredOutNames,
    features: state.features,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCharacter: (characterName) =>
      dispatch(removeCharacter(characterName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
