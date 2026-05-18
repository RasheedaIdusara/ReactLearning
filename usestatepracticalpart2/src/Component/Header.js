import React, { useState } from 'react'
import close from '../image/close.svg'
import menu from '../image/menu.svg'

const Header = () => {

const[menuclick,setmenuclick] = useState(false);

    return (
        <header className='header_container'>
            <h1>AUK <span>DEV</span></h1>
            <nav>
                <img src={menu} style={{
                    width:'20px',
                    cursor:'pointer'
                }}
                
                onClick={()=>{
                    setmenuclick(true);
                }}

                />
                <ul style={{
                    right:`${menuclick?"-20px":"-250px"}`,
                }}>
                    <div className='header_menuclose'>
                        <img src={close} style={{
                            width:'20px'
                        }}
                        
                        onClick={()=>{
                            setmenuclick(false)
                        }}

                        />
                    </div>

                    <div className='header_menu'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                    </div>

                </ul>
            </nav>
        </header>
    )
}

export default Header;
