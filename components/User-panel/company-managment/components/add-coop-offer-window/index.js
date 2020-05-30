import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  Container,
  ChoseFieldContainer,
} from "./add-coop-offer-window__styles";
import Window from "../../../../UI/window";
import Input from "../../../../UI/input";
import Separator from "../../../../UI/separator";
import ChooseField from "../../../../UI/choose-input";
import { getIndustries } from "../../../../../data/industries";
import SmallButton from "../../../../UI/small-button";
import withClick from "../../../../HOC/withClick";
import Loading from "../../../../UI/loading-circle";

const Button = withClick(SmallButton);

const AddCooperationOfferWindow = ({ close, handleInputs, inputs, submit }) => {
  const language = useSelector(
    (s) => s.language.source.companyPanel.addNewCooperationOfferWindow
  );

  const inputsArray = [
    {
      label: language.title,
      value: inputs.title,
      name: "title",
    },
    {
      label: language.city,
      value: inputs.city,
      name: "city",
    },
    {
      label: language.content,
      value: inputs.content,
      name: "content",
      type: "textarea",
    },
  ];

  const handleChooseField = (field, index) => {
    handleInputs({ inputName: "industry", value: { field, index } });
  };

  return (
    <Window width="50vw" close={() => close(true)}>
      <Container>
        <ChoseFieldContainer>
          <div>{language.industry}</div>
          <Separator width="20px" />
          <ChooseField
            fields={getIndustries()}
            choosenFieldIndex={inputs.industry.index}
            onChange={handleChooseField}
          />
        </ChoseFieldContainer>
        <Separator height="20px" />
        {inputsArray.map((input, i) => (
          <React.Fragment>
            <Input
              key={input.name + i}
              label={input.label}
              value={input.value}
              onChange={(e) =>
                handleInputs({ inputName: input.name, value: e.target.value })
              }
              name={input.name}
              type={input.type}
            />
            <Separator height="20px" />
          </React.Fragment>
        ))}
        {inputs.isLoading ? (
          <SmallButton>
            <Loading text={language.loading} />
          </SmallButton>
        ) : inputs.isEditMode ? null : (
          <Button onClickFunction={submit}>{language.submit}</Button>
        )}
      </Container>
    </Window>
  );
};

AddCooperationOfferWindow.propTypes = {
  close: PropTypes.func.isRequired,
  handleInputs: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  inputs: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    city: PropTypes.string,
    isLoading: PropTypes.bool,
    isEditMode: PropTypes.bool,
    industry: PropTypes.shape({
      name: PropTypes.string,
      index: PropTypes.number,
    }),
  }),
};

export default AddCooperationOfferWindow;
