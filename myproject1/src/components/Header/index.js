import React from 'react';
import style from './style.module.css'


// export default () =>{
//     return (
//     <header className={style.Head}>
//         John Doe
//     </header>
//     );
// }

class Header extends React.Component{
    render (){
        return(
            <header className={style.Head}>
                John Doe
            </header>
        );
    }
}

export default Header;