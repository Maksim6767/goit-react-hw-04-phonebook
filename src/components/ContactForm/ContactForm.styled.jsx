import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormWr = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 200px;
  border: 2px solid silver;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
`;

export const Input = styled(Field)`
  height: 32px;
  font-size: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid tomato;
  padding: 0 10px;
  :focus {
    box-shadow: rgba(129, 177, 219, 0.28) 6px 2px 16px 0px,
      rgba(245, 218, 218, 0.8) -6px -2px 16px 0px;
  }
  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  height: 32px;
  width: 60%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  :hover {
    background-color: #7e98df;
    color: #ffffff;
  }
  transition: background-color 0.4s, color 0.4s;
`;

export const Error = styled(ErrorMessage)`
  font-size: 16px;
`;