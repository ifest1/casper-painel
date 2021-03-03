import React, { useState } from 'react';
import Input from '../input/index';
import Dropdown from '../dropdown/index';
import { FormContainer } from './styles';
import GenericButton from '../genericbutton/index';

function Form({saveHandler, form={index: null, data: {}}}) {
  const [selectedCategory, setSelectedCategory] = useState(form.data.category);
  const [title, setTitle ] = useState(form.data.title);
  const [description, setDescription ] = useState(form.data.description);
  const [imgUrl, setImgUrl ] = useState(form.data.img_url);
  const [newsUrl, setNewsUrl ] = useState(form.data.news_url);
  
  const payload = () => {
    if (!form.data._id) {
      return {
        title: title,
        description: description,
        category: selectedCategory,
        img_url: imgUrl,
        news_url: newsUrl,
      }
    }
    return {
      index: form.index,
      data: {
        _id: form.data._id,
        title: title,
        description: description,
        category: selectedCategory,
        img_url: imgUrl,
        news_url: newsUrl,
        }
    }
  }

  return (
    <FormContainer> 
      <Input value={title} onChange={(e => setTitle(e.target.value))} value={title}/>
      <Dropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Input onChange={(e) => setDescription(e.target.value)} value={description}/>
      <Input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl}/>
      <Input onChange={(e) => setNewsUrl(e.target.value)} value={newsUrl}/>
      <GenericButton onClick={() => {saveHandler(payload())}}>Salvar</GenericButton>
    </FormContainer>
  )
}

export default Form;
