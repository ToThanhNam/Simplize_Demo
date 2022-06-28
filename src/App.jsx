import Blog from './pages/Blog';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-detail' element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyDe2D66Xw_Wuul6Ru0t8GKbR8lJq3qNpmc",
  authDomain: "simplizeprojectdemo.firebaseapp.com",
  projectId: "simplizeprojectdemo",
  storageBucket: "simplizeprojectdemo.appspot.com",
  messagingSenderId: "751426590873",
  appId: "1:751426590873:web:fdeaf9bb0242a574530008",
  measurementId: "G-N980WK953B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
