import React, { useState, useEffect } from 'react';
import { Container, Table, Items } from './styles';
import Popup from '../../components/popup/index';
import ToastContainer from '../../components/toast/index';
import IconButton from '../../components/iconbutton';
import GenericButton from '../../components/genericbutton';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

function News() {
  const jwt = localStorage.getItem('jwt');
  const [news, setNews] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);

  const [toUpdate, setToUpdate] = useState({});

  const headers = {
    'x-access-token': jwt,
  }
  
  useEffect(() => {
    api.get('/news', {headers: headers}).then(response => {
      console.log(response.data);
      setNews(response.data);
    })
  }, [])

  function handleAddNews(data){
    api.post('/news', data, {headers: headers}).then(response => {
      setNews([...news, response.data]);
    })
  }

  function handleRemoveNews(id){
    api.delete(`/news/${id}`, {headers: headers}).then(response => {
      console.log(response.data);
    })
  }

  function handleUpdateNews(patch) {
    let id = patch._id;
    api.patch(`/news/${id}`, patch, {headers: headers}).then(response => {
      console.log(response.data);
    })
    
  }

  function editRow(index) {
    let currentItem = news[index];
    setToUpdate(currentItem);
    setEditPopup(true);
  }


  const renderBody = () => {
    return news && news.map(({_id, title, category, description, img_url, news_url}, index) => {
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{title}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>{img_url}</td>
          <td>{news_url}</td>
          <td><IconButton type="button" onClick={()=> handleRemoveNews(_id)}><FiTrash2/></IconButton></td>
          <td><IconButton type="button" onClick={() => editRow(index)}><FiEdit2/></IconButton></td>
        </tr>
      )
    })
  }

  const renderHeader = () => {
    let headerElement = ['Id', 'Titulo', 'Categoria', 'Descrição', 'URL Imagem', 'URL Notícia', '', ''];

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
  }

  return (
      <Container>
        <ToastContainer/>
          <Items>
            <Table>
              <thead>
                <tr>
                  {renderHeader()}
                </tr>
              </thead>
              <tbody>
                {renderBody()}
              </tbody>
            </Table>
          <GenericButton type="button" onClick={() => setAddPopup(true)}><FiPlus/></GenericButton>
          <Popup trigger={addPopup} setTrigger={setAddPopup}>
            <h2>Adicionar notícia</h2>
          </Popup>
          <Popup trigger={editPopup} setTrigger={setEditPopup}>
            <h2>Editar notícia</h2>
            <GenericButton onClick={(handleUpdateNews(toUpdate))}>Salvar</GenericButton>
          </Popup>
          </Items>
      </Container>
  ) 
}


export default News;
