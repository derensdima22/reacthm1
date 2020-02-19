import React from 'react';
import style from './style.module.css'
import logo from './310.png'


class Footer extends React.Component{
    render (){
        return(
            <footer className={style.Foot}>
              <p>365 Freebies. 007/365</p>
              <img src="310.png" className={style.Ux} />
               {/* <div className={style.Ux}></div> */}
               <p>@anakarenat</p>
            </footer>
        );
    }
}

export default Footer;