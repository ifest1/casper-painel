import IconButton from '../../components/iconbutton';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';


const renderBody = (news, deleteRow, editRow) => {
  return news && news.map(({_id, title, category, description, img_url, news_url}, index) => {
    return (
      <tr key={_id}>
        <td><h5>{title}</h5></td>
        <td><h5>{category}</h5></td>
        <td><h5>{description}</h5></td>
        <td><h5>{img_url}</h5></td>
        <td><h5>{news_url}</h5></td>
        <td><IconButton type="button" onClick={()=> deleteRow(index)}><FiTrash2/></IconButton></td>
        <td><IconButton type="button" onClick={() => editRow(index)}><FiEdit2/></IconButton></td>
      </tr>
    )
  })
}


const renderHeader = (headers) => {
  let headerElement = headers;

      return headerElement.map((key, index) => {
          return <th key={index}><h5>{key.toUpperCase()}</h5></th>
      })
}

export { 
  renderHeader,
  renderBody
}