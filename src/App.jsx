// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Favourite from "./components/Favourite";
// import Details from "./components/Details";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/favourites" element={<Favourite />} />
//           <Route path="/recipe/:id" element={<Details />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
          {/* Updated route path to match '/recipe-item/:id' */}
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
