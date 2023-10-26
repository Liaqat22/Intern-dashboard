import { Route, Routes } from 'react-router-dom';
import './App.css';
import Overview from './Pages/Overview';
// import Reports from './Pages/Reports';
import Analysis from './Pages/Analysis';
import Exports from './Pages/Exports';
import Flex from './Pages/Flex';
import Theme from './Pages/Theme';
import TotalProjects from './Projectpages/TotalProjects';
import Projectongoing from './Projectpages/Projectongoing';
import ProjectCompleted from './Projectpages/ProjectCompleted';
import Layout from './Component/Layout';
import Leave from './Pages/Leave';

function App() {
  return (
   <>
   <Layout>
   <Routes>
    {/* ============================================ dashboard items ========================================= */}

    <Route path='/' element = {<Overview/>} />
    {/* <Route path='/report' element = {<Reports/>} /> */}
    <Route path='/analysis' element = {<Analysis/>} />
    <Route path='/export' element = {<Exports/>} />
    <Route path='/flex' element = {<Flex/>} />
    <Route path='/theme' element = {<Theme/>} />
    <Route path='/leave' element = {<Leave/>} />


    {/* =============================================== projects ================================================= */}
    <Route path='/tp' element = {<TotalProjects/>} />
    <Route path='/pongoing' element = {<Projectongoing/>} />
    <Route path='/pcompleted' element = {<ProjectCompleted/>} />

   </Routes>
   </Layout>
   </>
  );
}

export default App;
