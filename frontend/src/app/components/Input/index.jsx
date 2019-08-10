import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputText = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  padding: 0px 20px;
  width: 100%;
  &::placeholder {
    color: #999;
  }
`

const Input = ({
  placeholder,
  value
}) => (
  <InputText placeholder={placeholder} value={value} />
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Input