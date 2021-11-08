import styled from 'styled-components';

export const DropDownListContainer = styled('div')`
  position: absolute;
`;

export const DropDownList = styled('ul')`
  padding: 5px 0;
  margin-left: -23px;
  margin-top: 54px;
  background: rgba(0, 119, 139, 0.6);
  box-sizing: border-box;
  color: #fff;
`;

export const ListItem = styled('li')`
  list-style: none;
  padding: 3px 0;
  font-size: 14px;
  border-bottom: solid 1px transparent;
  :hover {
    border-bottom: solid 1px #fff;
  }
`;

export const CurrentLang = styled.div`
  color: white;
  font-size: 20px;
`;

export const Border = styled.div`
  padding: 5px 32px;
`;
