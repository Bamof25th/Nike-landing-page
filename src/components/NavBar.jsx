import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const NavBar = () => {
  return (
    <header>
      <nav className=" flex justify-between items-center max-container mt-3 p-4">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg">
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
           ))}
        </ul>
      <div className="">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
      </nav>

    </header>
  );
};

export default NavBar;
