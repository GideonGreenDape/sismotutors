import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import sismoicon from "../../assets/icons/sismoicon.png";

function HeaderMobile() {
  return (
    <header className="px-[5.36%] w-full h-[76px] flex justify-between items-center bg-white fixed z-50">
       <img onClick={(e)=>{
        e.stopPropagation();
        window.location.href = "/";
       }} className="block  w-[50px] h-[50px] cursor-pointer " src={sismoicon} alt="sismo Icon" />

       <div className="flex w-[92px] gap-[22px] h-[35px] ">
        <img className="block w-[35px] h-[35px] " src={search} alt="search icon" />
        <img className="block w-[35px] h-[35px] " src={menu} alt="menu icon" />
        </div> 
    </header>
  );
}


export default HeaderMobile;