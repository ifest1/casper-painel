import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;


const Items = styled.div`
  background-color: white;
  padding: 15px;
  box-shadow: 10px 10px 31px -8px rgba(0,0,0,0.53);
  width: 90%;
  border-radius: 10px;
`;


const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0px;
  font-size: 1.0em;
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);


  > thead > tr {
    background-color: #312e38;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
  > thead > tr {
    background-color: #312e38;
    text-align: center;
    font-weight: 500;
  }

  > tbody > tr {
    height: 100px;
    border-bottom: 1px solid #dddddd;
    text-align: center;
  }

  > tbody > tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  > tbody > tr:last-of-type {
    border-bottom: 2px solid #312e38;
  }

  > tbody > tr:hover {
    background-color: #DCDCDC;
  }
`;

export {
  Container,
  Items, 
  Table,
}