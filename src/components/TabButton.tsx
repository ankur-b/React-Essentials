import React from "react"
export default function TabButton({ children,onSelect,isSelected }: { children: React.ReactNode,onSelect:()=>void,isSelected:boolean }) {
    return (<li><button className={isSelected ? "active" :undefined} onClick={onSelect}>{children}</button></li>)
} 