import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 8px 10px;
  font: 14px;
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  background: ${(props) => props.theme.background.tertiary};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  text-transform: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.tertiary};
    border: 1px solid ${(props) => props.theme.colors.secundary};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  font-size: 11px;
  flex-direction: column;
  width: 300px;
  background: ${(props) => props.theme.background.tertiary};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  height: auto;
  max-height: 480px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

export const LabelContent = styled.span`
  font-weight: 600;
  font-size: 13px;
  margin-left: 15px;
  cursor: default;
`;

export const CloseIconContent = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
  width: 17px;
  height: 17px;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  };
`;

export const WrapperOptionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsContent = styled.label`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  border-top: 1px solid ${(props) => props.theme.colors.tertiary};
  &:hover {
    background: ${(props) => props.theme.colors.tertiary};
  }
`;

export const WrapperCheckContent = styled.div`
  margin: 0px 10px;
  width: 16px;
  height: 16px;
`;

export const CheckContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const OptionContent = styled.span`
  font-size: 13px;
`;
