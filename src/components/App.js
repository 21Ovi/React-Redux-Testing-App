import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<CommentList />} />
      <Route path="/post" element={<CommentBox />} />
    </Routes>
  );
};

export default App;
