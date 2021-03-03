import React, { useState, useEffect } from 'react';
import { Container, Table, Items } from './styles';
import { Redirect } from 'react-router-dom';
import Popup from '../../components/popup/index';
import AddButton from '../../components/addbutton';
import GenericButton from '../../components/genericbutton';
import { renderHeader, renderBody } from './table_render';
import Form from '../../components/form/index';
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api';

function News() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
  const [news, setNews] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [toUpdate, setToUpdate] = useState({});
  const tableHeaders = ['Titulo', 'Categoria', 'Descrição', 'URL Imagem', 'URL Notícia', '', ''];
  const headers = {
    'x-access-token': jwt,
  }
  
  useEffect(() => {
    api.get('/news', {headers: headers}).then(response => {
      setNews(response.data);
    })
  }, [])

  function handleAddNews(data){
    api.post('/news', data, {headers: headers}).then(response => {
      setNews([...news, response.data]);
      setAddPopup(false);
    })
  }

  function handleUpdateNews({index, data}) {
    let id = data._id;
    let temp = news;
    temp[index] = data;

    api.patch(`/news/${id}`, data, {headers: headers}).then(response => {
      setNews(temp);
      setEditPopup(false);
      setToUpdate({});
    })
  }


  function handleDeleteNews(id) {
    api.delete(`news/${id}`, {headers: headers}).then(response => {
      let temp = news.filter((item) => item._id !== id);
      console.log('teste');
      setNews(temp);
    });
  }

  function deleteRow(index){
    let currentItem = news[index];
    handleDeleteNews(currentItem._id);
  }

  function editRow(index) {
    let currentItem = {index}
    currentItem.data = news[index];
    setToUpdate(currentItem);
    setEditPopup(true);
  }

  function logout() {
    localStorage.removeItem('jwt');
    setJwt('');
  }

  if (!jwt) {
    return <Redirect to='/'/>
  }
  return (
      <Container>
          <Items>
          <GenericButton onClick={() => logout()}>Logout</GenericButton>
            <Table>
              <thead>
                <tr>{renderHeader(tableHeaders)}</tr>
              </thead>
              <tbody>{renderBody(news, deleteRow, editRow)}</tbody>
            </Table>
          <AddButton type="button" onClick={() => setAddPopup(true)}>
            <FiPlus/>
          </AddButton>
          <Popup trigger={addPopup} setTrigger={setAddPopup}>
            <h2>Adicionar notícia</h2>
            <Form saveHandler={handleAddNews}/>
          </Popup>
          <Popup trigger={editPopup} setTrigger={setEditPopup}>
            <h2>Editar notícia</h2>
            <Form saveHandler={handleUpdateNews} form={toUpdate}/>
          </Popup>
          </Items>
      </Container>
  ) 
}


export default News;
