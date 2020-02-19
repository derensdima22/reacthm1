import React from 'react';
import style from './style.module.css'


export default () => {
    let Box = props => {
        let [count, setCount] = React.useState(1);
        if(count < 0){
          count = 0;  
        }
        return(
        <div className={style.Box}>
            
            <div className={style.Num} >{count}</div>
            <p className={style.Text}>
                {props.children}
            </p>
            <button className={style.Button} onClick={() => setCount(count +1)}><span>+</span></button>
            <button className={style.Button} onClick={() => setCount(count -1)}><span>-</span></button>
        </div>
        )  
    };

    return (
        <main>
           <h1>John Doe Profile</h1> 
           <div className={style.Foto}></div>
           <div className={style.MainFooter}>
                 <Box>Followers</Box>
                 <div className={style.Band}></div>
                 <Box>Following</Box>
           </div>
           
        </main>
    );
}