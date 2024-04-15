import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiMenu2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { IoPersonOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeBasket } from '../../Slice/BasketSlice';
import { useDispatch } from 'react-redux'


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsShoppingBagOpen(false);
  };

  const toggleShoppingBag = () => {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  };

  const closeSidebarr = () => {
    setIsSidebarOpen(false);
  };
  
  const dispatch=useDispatch()
  const basket=useSelector(state=>state.basket.items)
  const navigate=useNavigate()
  const gocheckout=()=>{
    navigate("/checkout")
  }

  return (
    <>
<div style={{ backgroundColor: "white",  }} className={`flex justify-around items-center${scrollPosition > 10 ? ' fixed top-0 left-0 w-full z-20' : ''}`}>
  <div className='laptop:hidden tablet:block' onClick={toggleSidebar}>
    <span className='text-[18px]'><HiMenuAlt1 /></span>
  </div>
  <div>
    <img className='w-full max-w-[200px] tablet:w-[150px] laptop:w-40' src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" alt="" />
  </div>
  <div className='laptop:block tablet:hidden'>
    <div className='flex gap-10 text-[16px] font-medium py-7'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/pages">Pages</NavLink>
      <NavLink to="/featured">Featured</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </div>
  </div>
  <div className=' flex gap-4 text-[25px] text-center items-center'>
    <span><CiSearch /></span>
    <span className='laptop:block tablet:hidden text-[22px]'><IoPersonOutline /></span>
    <span className='laptop:block tablet:hidden text-[27px]'><CiHeart /></span>
    <span onClick={toggleShoppingBag}><LiaShoppingBagSolid /></span>
    
  </div>
</div>
{isShoppingBagOpen && (
  <div style={{background:"rgb(247,247,247)"}} className="sidebar fixed top-0 right-0 bottom-0 w-[400px] z-[50] flex flex-col bg-gray-100 p-4">
    <div  className="flex items-center justify-between mb-4">
      <button className="text-[25px]" onClick={closeSidebar}>x</button>
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      <p className='text-[25px]'>0</p>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      {basket.length > 0 ? (
        basket.map(item => (
          <div key={item.Id} className="flex items-center justify-around space-x-4 py-2">
            <img src={item.ProductImage} alt="" className="w-12 h-12" />
            <p className="text-lg">{item.Name}</p>
            <p className='cursor-pointer' onClick={() => dispatch(removeBasket(item.Id))}><RiDeleteBin5Line /></p>
          </div>
        ))
      ) : (
        <p className="text-lg flex justify-center font-semibold text-[16px]">Your cart is currently empty.</p>
      )}
    </div>
    <button className="bg-blue hover:bg-blue-600 text-white py-2 rounded mt-4" onClick={gocheckout}>Go to Checkout</button>
  </div>
)}




      {isSidebarOpen && (
        <div className="sidebar fixed top-0 left-0 h-screen w-[300px] z-30" style={{ backgroundColor: 'white' }}>
          <div className='flex h-14'>
            <button className='menubuton flex items-center bg-black text-white w-[150px] justify-center gap-3'><i className='text-[20px]'><RiMenu2Line /></i>  MENU </button>
            <button className='sidebar flex items-center bg-white w-[150px] justify-center gap-3 border border-transparent'><p className='text-[20px]'><i ><IoPersonOutline /></i></p> LOGIN </button>
          </div>
          <div className='sidebar flex flex-col'>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/">Home <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Shop">Shop <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Featured">Featured <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Pages">Pages<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Blogs">Blogs<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
          </div>
          <button onClick={closeSidebarr} className="absolute bottom-0 left-0 w-full py-2 bg-customGreen text-center buton">Close</button>
        </div>
      )}
    </>
  )
}

export default Navbar;
