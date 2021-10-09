import React from 'react';

function Nav(props) {
        const { currentTab, setCurrentTab } = props

        return ( 
            <nav id="navbar">
            <h2><a href="#Home">Yussef Rafat</a></h2>
            <ul>
            <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick={() => setCurrentTab("about")}>About</span>
                   
                </li>
                <li className={currentTab === "projects" ? "mx-2 navActive" : "mx-2"}>
                  <span onClick={() => setCurrentTab("projects")}>Projects</span>
                   
                </li>
               
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                   <span onClick={() => setCurrentTab("contact")}>Contact Me</span>
                </li>
               
            </ul>
        </nav>

        );
}

export default Nav;
