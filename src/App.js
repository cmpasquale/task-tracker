import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

//Delete Tasks
  const deleteTask = (id) => {
    console.log('delete' , id)
    
  
}

  return (
   <div>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
      
    </div>
  );
}

export default App;
