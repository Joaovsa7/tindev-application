import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  margin-top: 10px;
  border-radius: 4px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  background: #Df4723;
  color: white;
  cursor: pointer;
  width: 100%;
`;


const Button = ({
  children,
  onClick
}) => {
  return ( 
    <StyledButton>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
 
export default Button