import { Routes, Route, BrowserRouter } from "react-router-dom";
import BucketPage from "./BucketPage";
import CardPage from "./CardPage";
function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <BrowserRouter>
          <Routes>
            <Route path="/cards/:bucketId" element={<CardPage />} />
            <Route path="/" element={<BucketPage />} />
            {/* <Route path="/slides" element={<Slides />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/pastpapers" element={<PastPapers />} />
          <Route path="/books" element={<Books />} />
          <Route path="/old-books" element={<OldBooks />} />
          <Route path="/cycles" element={<Cycles />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/found" element={<Found />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
