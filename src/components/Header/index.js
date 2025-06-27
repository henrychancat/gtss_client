import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [show,setShow]=useState(false)
  const location=useLocation()
  useEffect(()=>{
    setShow(false)
  },[location])
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow">
      <div className="text-xl font-bold">GTSS</div>
      <nav className={`space-x-6  items-center ${show?'block':'flex'}`}>
        <Link to="/app" className="text-blue-300 font-semibold">
          Home
        </Link>
        <Link to="/app/about">About</Link>
        <Link to="/app/booking">Booking</Link>
        <Link to="/app/login">Login</Link>
        {/* <a href="#" className="user-image"><img src="https://img-s.msn.cn/tenant/amp/entityid/AA11fKUj?w=20&h=0&q=90&m=6&f=png&u=t"><b>UserName</b><span>Logout</span></a> 登录后显示用户头像，这里需要写一下鼠标移入头像显示logout的功能 */}
        <select id="languageSwitcher" className="ml-6 px-2 py-1 border rounded">
          <option value="en">EN</option>
          <option value="zh-CN">中文（简体）</option>
          <option value="zh-TW">中文（繁體）</option>
          <option value="ja">日本語</option>
        </select>
      </nav>
      {/* 移动端按钮*/}
      <button className="mobile-menu" onClick={()=>setShow(!show)}>
        <b>&nbsp;</b>
        <b>&nbsp;</b>
        <b>&nbsp;</b>
      </button>
    </header>
  );
}
