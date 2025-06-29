import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <TaskManager />
        <div className="mt-8">
          <ApiData />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
