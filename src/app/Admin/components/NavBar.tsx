import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed md:px-[25%] px-[15%] lg:px-[30%] top-[100%] translate-y-[-100%] flex items-center duration-[300ms] justify-evenly bg-black border-t border-gray-800 w-[100%] min-h-[70px]">
      <Link href="/Admin">
        <button className="nav-btn">Home</button>
      </Link>

      <Link href="/Admin/monitor">
        <button className="nav-btn">Monetor</button>
      </Link>

      <Link href="/Admin/controller">
        <button className="nav-btn">Controller</button>
      </Link>
    </div>
  );
};

export default NavBar;
