import image from "../abc.png"
import "./navbar.css"
import { Link } from "react-router-dom"

function NavBar() {
  const closingAfterClick=()=>{
    document.getElementById("nav-check").checked = false;
  }
  return (
    <div>
    <div class="nav">
<input type="checkbox" id="nav-check"/>
<div class="nav-header">
  <div class="nav-title">

    <a href="https://kalvium.com/" target="_blank"><img src={image}/></a>
  </div>
</div>
<div class="nav-btn">
  <label for="nav-check">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>

<div id="nav-links" class="nav-links">
  <Link to='/'>
  <h3 onClick={()=>closingAfterClick()}>Home</h3>
  </Link>
  <Link to='/form'>
  <h3 onClick={()=>closingAfterClick()}>Register</h3>
  </Link>
</div>
</div>
</div>
  )
}

export default NavBar