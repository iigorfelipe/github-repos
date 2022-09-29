import styled from 'styled-components';

export const GridOl = styled.ol`
  width: 912px;
  /* height: 264px; */
  margin: 0px -8px 8px;
  font-size: 14px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GridLi = styled.li`
  width: 456px;
  height: 125px;
  margin: 0px 0px 16px;
  padding: 0px 8px;
`;

export const GridDiv = styled.div`
  width: 440px;
  height: 125px;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const GridDiv2 = styled.div`
  width: 406px;
  height: 91px;
`;

export const GridTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.link};
`;

export const GridDescrition = styled.p`
  height: 36px;
  margin: 8px 0px 0px;
  font-size: 12px;
`;

export const GridStars = styled.p`
  width: 406px;
  height: 18px;
  margin: 8px 0px 0px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Span = styled.span`
  margin: 0px 0px 0px 16px;
`;
