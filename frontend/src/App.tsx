import Layout from "./layouts/Layout";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate
 } from "react-router-dom";
import Register from "./pages/Register";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <p>home page</p></Layout>}/>
        <Route path="/search" element={<Layout><p>Search page</p></Layout>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;
