import { BiTimeFive } from 'react-icons/bi';
import { BsArrowDownLeft, BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineCloud } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import rabbit from '../img/rabbit.png';
import './navbar.css'

const NavBar = () => (
  <div id="navbar" className="container-flex">
    <div id="navbar-information" className="container-flex">
      <p id="information-p" className="container-flex">P</p>
      <p id="information-time">
        {' '}
        <BiTimeFive />
        {' '}
        0min
        {' '}
      </p>
      <img src={rabbit} alt="bunny" id="information-icon" />
      <p id="information-icons">
        <BsArrowDownLeft />
        {' '}
        0
      </p>
    </div>
    <div id="navbar-options" className="container-flex">
      <BsCheck2Circle className="icon" />
      <AiOutlineCloud className="icon" />
      <SlOptionsVertical className="icon" />
    </div>
  </div>
);
export default NavBar;
