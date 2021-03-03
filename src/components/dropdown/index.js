import { 
  StyledUl,
  DropDownLi,
  Dropbtn,
  DropDownContent,
  SelectedItem,
  SubA,
 } from './styles';

import { AiOutlineDown } from 'react-icons/ai'

function Dropdown({selectedCategory, setSelectedCategory}) {

  return (
    <StyledUl>
        <DropDownLi>
          
            <Dropbtn>
              <AiOutlineDown/>
              <SelectedItem>{selectedCategory}</SelectedItem>
            </Dropbtn>
          
          <DropDownContent>
            <SubA onClick={() => setSelectedCategory('Política')}>Política</SubA>
            <SubA onClick={() => setSelectedCategory('Entretenimento')}>Entretenimento</SubA>
            <SubA onClick={() => setSelectedCategory('Famosos')}>Famosos</SubA>
            <SubA onClick={() => setSelectedCategory('Esportes')}>Esportes</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
  )
}

export default Dropdown;
