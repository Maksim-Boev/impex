import styled from 'styled-components';

export const Container = styled('div')`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
`;

export const DropDownList = styled('ul')`
  padding: 5px 0;
  margin-left: -170px;
  margin-top: 59px;
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

export const Icon = styled.div`
  width: 16px;
  height: 16px;
`;

export const Border = styled.div`
  padding: 5px 32px;
`;
