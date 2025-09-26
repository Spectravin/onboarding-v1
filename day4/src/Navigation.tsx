import React from 'react'
import { useState } from 'react'
import ReactingToUserInput from './components/ReactingToUserInput';
import Chatbox from './components/PreservingAndResettingState/Chatbox';
import CounterReducer from './components/CounterReducer';
import SharingStateParent from './components/PanelSelection/SharingStateParent';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.nav`
  width: 220px;
  background-color: #20232a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background-color: #61dafb;
    color: black;
    border-radius: 6px;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background: #f9f9f9;
  overflow-y: auto;
`;
type Page="reactingToUserInput"|"chatbox"|"counterReducer"|"sharing";

function renderPage(page:Page){
    switch(page){
        case "reactingToUserInput":
            return <ReactingToUserInput/>
        case "chatbox":
            return <Chatbox/> 
        case "counterReducer":
            return <CounterReducer/>
        case "sharing":
            return <SharingStateParent/>
        default:
           return <ReactingToUserInput/>
    }
}
const Navigation = () => {
    const [page, setPage] = useState<Page>("reactingToUserInput");
  return (
    <Layout>
        <Sidebar >
            <NavButton onClick={()=>setPage("reactingToUserInput")}>ReactingToUserInput</NavButton>
            <NavButton onClick={()=>setPage("chatbox")}>Chatbox</NavButton>
            <NavButton onClick={()=>setPage("counterReducer")}>CounterReducer</NavButton>
            <NavButton onClick={()=>setPage("sharing")}>SharingStateParent</NavButton>
        </Sidebar>
        <Content className="content">
            {renderPage(page)}
        </Content>  


    </Layout>
  )
}

export default Navigation