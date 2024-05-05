import React from "react"
export default function TabButton({ children,onSelect }: { children: React.ReactNode,onSelect:()=>void }) {
    function handleClick(){
        console.log("hello world")
    }
    return (<li><button onClick={onSelect}>{children}</button></li>)
} 