import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/HomePage/HomePage';
import { Container } from 'reactstrap';


const App = () => {
  return (
    <Container>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />

        </Routes>
      </MainLayout>
  </Container>
  );
};

export default App;
