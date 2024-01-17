import React, { useMemo, useState } from 'react'
import Header from './Header';

const Rerender = () => {
    const [title,setTitle] = useState("My name is umakant");

    function updateTitle(){
        setTitle("My name is "+ Math.random());
    }

  return (
    <div>
        <button onClick={updateTitle}>Update Title</button>
        <Header title={title}></Header>
        <Header title="Header3"></Header>
        <Header title="Header4"></Header>
        <Header title="Header5"></Header>
        <Header title="Header6"></Header>
    </div>
  )
}

const Header = useMemo(function Header({title}){
    return
    <div>{title}</div>
})

export default Rerender