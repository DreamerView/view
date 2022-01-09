import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Menu = (props) => {
    const url = useLocation().pathname;
    let a = (url === props.item.active) ? "-active" : '';
    const ScrollToTop = () =>{
      window.scrollTo({top:0})
    };
    return(
      <Link onClick={ScrollToTop} className={`menu-s-b${a}`} to={props.item.active}>
        {props.item.accept?<div className="menu-s-b-notification"><h1 className='menu-s-b-notification-text'>{props.item.accept}</h1></div>:""}
                <div className="menu-s-b-i">
                  <div className="menu-s-b-i-i">
                    <img src={`${props.item.images}${a}.svg`} alt="icon" loading="lazy" className="menu-s-b-i-p" />
                  </div>
                  <div className="menu-s-b-i-t">
                    <h1 className={`menu-s-b-i-t-1${a}`}>{props.item.title}</h1>
                  </div>
                </div>
        </Link>
    );
}

export default React.memo(Menu);