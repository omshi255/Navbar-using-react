import './App.css';
function App() {
  return (
   <>
   <nav className="navbar">
    <li>Home</li>
    <li>About-us</li>
    <li>Info</li>
    <li>More</li>
    <li>Contact</li>
   
    <input type="text" className="search-input" placeholder='search here' />
    <button className="button-search">
     <p> Search</p>
    </button>
   
   </nav>
  </>
  );
}

export default App;
