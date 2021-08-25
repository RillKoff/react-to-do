import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import { SideBar } from './components/SideBar'
import { MainStyled } from './components/Main'

function App() {
  return (
    <>
      <GlobalStyle/>
        <MainStyled/>
      <SideBar/>
    </>
  );
}

export default App;
