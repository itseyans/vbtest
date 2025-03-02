import React, { useState } from "react";
import styled from "styled-components";
import Button from "/public/SignButton.js"; // Ensure this is the correct path

const FormContainer = styled.div`
  width: 660px;
  height: auto;
  background: #ddd;
  border-radius: 20px;
  border: 5px solid #ffc629;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 5px;
`;

const LInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  width: 300px; /* Fixed width */
  box-sizing: border-box;

  &:focus {
    border-color: #ffc629;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 198, 41, 0.5);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

function PartsAndCostForm() {
  const [formData, setFormData] = useState({
    part: "",
    cost: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.part_name.trim()) {
      newErrors.part_name = "Part is required";
    }
    if (!formData.cost.trim()) {
      newErrors.cost = "Cost is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Parts and Cost Submitted!");
      console.log("Parts and Cost Data:", formData);
      // You can handle the form submission here (e.g., send data to an API)
    }
  };

  return (
    <FormContainer>
      <Title style={{ fontFamily: "Segoe UI Variable, sans-serif" }}>
        PARTS AND COST
      </Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <StyledLabel>Part Name</StyledLabel>
          <LInput
            type="text"
            name="part"
            value={formData.part_name}
            onChange={handleChange}
          />
          {errors.part_name && <ErrorText>{errors.part_name}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <StyledLabel>Cost</StyledLabel>
          <LInput
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
          {errors.cost && <ErrorText>{errors.cost}</ErrorText>}
        </InputGroup>

      </form>
    </FormContainer>
  );
}

export default PartsAndCostForm;