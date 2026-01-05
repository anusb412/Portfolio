import TODO from '../assets/TODO LIST/todo1.png'
import Auth1 from '../assets/Auth/auth1.png'

export default function Projects() {
  return (
    <section className='container'>
      <div className="card">
        <h1>Projects</h1>
      
        <div className="sec">
          <img src={TODO} alt="" />
          <h3>CRUD ToDo List</h3>
          <h4>https://github.com/anusb412/ToDoList</h4>
          <p >Simple React ToDo List with working fuctions to Add, Remove, Move-Up, and Move-Down tasks.</p>
        </div>
        <div className="sec">
          <img src={Auth1} alt="" />
          <h3>⚡ React Login Auth (Frontend & Backend)</h3>
          <h4>https://github.com/anusb412/Auth</h4>
        </div>
        <div className="sec">
          <h3>Kneaders Clone Website</h3>
          <h4>https://github.com/anusb412/kneaders</h4>
        </div>
        <div className="sec">
      </div>
          
        </div>
        
        
        
      
    </section>
  );
}


