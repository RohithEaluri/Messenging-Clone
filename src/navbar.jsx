  
 
import { flexbox } from '@mui/system';
import './Navbar.scss';

const Navbar = () => {
 

  return (
    <nav className="app__navbar">
      
      <div className="app__navbar-logo">

        <h1> Messenger Clone</h1>
         
      </div>
      <div className="app__navbar-links">
      <div className='media' style={{display:flexbox, flexDirection:'column' }}> 
      </div>
    </div>
      
    </nav>
  );
};

export default Navbar;
