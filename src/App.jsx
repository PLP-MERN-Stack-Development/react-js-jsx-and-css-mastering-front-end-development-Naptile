import React from "react";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager App</h1>
      <TaskManager />
    </Layout>
  );
}

export default App;
