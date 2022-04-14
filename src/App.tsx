import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import  { TaskForm } from './components/TaskForm'
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <TaskForm/>
    <Footer/>
    </>
  );
}

export default App;
