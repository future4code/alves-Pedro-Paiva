import React from 'react'
import styled from 'styled-components'

const HomePage = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
`
const Seletor = styled.select`
    display: flex;
    width: auto;
    height: 20px;
    margin-top: 150px;
    margin-left: 50px;
`
const Sidebar = styled.div`
 background-color: rgba(107, 239, 163, 1);
 width: 613px;
 height: 1080px;
 right: 50px;

`

export const Router = () =>  {
  return (  
      <HomePage> 
        <Sidebar>
        <Seletor>
             
             <option> LOTOFACIL</option>
             <option> LOTOMANIA</option>
             <option> OUTRO</option>
          </Seletor>
        </Sidebar>
      
     </HomePage>     
      
   
  )
}
