import React from "react";
import CreateColumn from "./functions/CreateColumn";
import Layout from "./components/Layout";
import "./App.scss";

function App() {
  return (
    <Layout title="Título do Quadro">
      <CreateColumn />
    </Layout>
  );
}

export default App;
