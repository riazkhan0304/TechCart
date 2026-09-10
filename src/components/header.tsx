"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-provider";
import { Icon } from "./icons";

const links = [["Home","/"],["Shop","/shop"],["Categories","/#categories"],["New Arrivals","/#new-arrivals"],["About Us","/about"],["Contact Us","/contact"]];

export function Header(){
  const [open,setOpen]=useState(false);
  const {count}=useCart();
  return <>
    <div className="topbar"><span>Fast Delivery Across Pakistan</span><span>Secure Checkout</span><span>Easy Returns</span></div>
    <header className="header">
      <div className="container brandrow">
        <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><Icon name="menu"/></button>
        <Link href="/" className="logo"><i>TC</i><span><b>TechCart</b><small>PAKISTAN - Smart Tech. Better Prices.</small></span></Link>
        <form className="searchbox" action="/shop"><input name="q" placeholder="Search for products, brands or categories..."/><button aria-label="Search"><Icon name="search"/></button></form>
        <div className="navicons"><Link href="/account" aria-label="Account"><Icon name="user"/><span>Account</span></Link><Link href="/cart" className="cart-icon" aria-label="Cart"><Icon name="cart"/><span>Cart</span>{count>0&&<i>{count}</i>}</Link></div>
      </div>
      <div className="navline"><nav className={open?"nav open":"nav"}>{links.map(([name,href])=><Link key={name} href={href} onClick={()=>setOpen(false)}>{name}</Link>)}<Link className="deals" href="/shop" onClick={()=>setOpen(false)}>Deals</Link></nav></div>
    </header>
  </>;
}
