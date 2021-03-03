import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: flex;
  color: inherit;
  text-align: center;
  padding: 10px;
  text-decoration: none;
`;


const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: #f9f9f9;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SelectedItem = styled.h4`
  margin-left: 10px;
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export { 
  StyledUl,
  StyledLi,
  SubA,
  StyledA,
  DropDownLi,
  DropDownContent,
  SelectedItem,
  Dropbtn
}