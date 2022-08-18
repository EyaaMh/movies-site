import './Navbar.css';

function Navbar(){
    return(
    <div className="nav">
      
      <p>Home</p>
      <p>Movies</p>
      <p>Reviews</p>
      

      < div className='icc'>
      <i class="fa-solid fa-star"></i>     
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      </div>
     
      <input type={"text"}></input>
      <button>search</button>

      
    </div>
    )
}
export default Navbar 