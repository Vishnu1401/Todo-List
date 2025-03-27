import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Content from './pages/react/Content';
import Title from './pages/react/Title';
import Layout from './components/Layout/Layout';
import { TopicProvider } from './pages/react/TopicsContext';
import Logout from './components/Login/Logout';
import Task from './components/Tasks/Task';
function App() {
  return (
    <TopicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tasks/:email" element={<Task />} />
            {/* <Route path="register" element={<Register />} /> */}
            <Route path="topics" element={<Title />} />
            <Route path="services/content/:id" element={<Content />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </TopicProvider>
  );
}

export default App;
