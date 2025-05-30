import React from "react";
import ReactDOM from "react-dom/client"
import {App} from "./App.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Comments } from "./components/Comments.jsx";
import { CommentDetails } from "./components/CommentDetails.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Router>
 <Routes>
  <Route path='/' element={<App />}></Route>
  <Route path='/comments' element={<Comments />}/>
  <Route path="/comment" element={<CommentDetails />}/>
 </Routes>
</Router>
)