import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Ctrl+Shift+Esc</div>
      <div>
        <NavItems />
      </div>
      <div>Cart icon</div>
    </div>
  )
};

export default NavBar;
