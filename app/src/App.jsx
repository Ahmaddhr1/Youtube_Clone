import { Routes, Route } from "react-router-dom";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
} from "./component";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:search" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
      </Routes>

    </>
  );
}

export default App;
