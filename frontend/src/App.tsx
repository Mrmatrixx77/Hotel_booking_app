import Layout from "./layouts/Layout";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate
 } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <p>home page</p></Layout>}/>
        <Route path="/search" element={<Layout><p>Search page</p></Layout>}/>
      </Routes>
    </Router>
  );
};

export default App;
