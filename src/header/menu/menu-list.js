import Menu from './menu';
import { useSelector } from 'react-redux';

const MenuList = () => {
    const cash = useSelector(state=>state.cash);
    return(
        <div className="menu-select">
            <Menu item={{id:1,images:process.env.PUBLIC_URL+'/images/pills',title:'Каталог',active:'/'}}/>
            <Menu item={{id:2,images:process.env.PUBLIC_URL+'/images/shopping-sale',title:'Для вас',active:'/foryou'}}/>
            <Menu item={{id:3,images:process.env.PUBLIC_URL+'/images/shopping-basket',title:'Корзина',active:'/basket',accept:cash,send:''}}/>
            <Menu item={{id:4,images:process.env.PUBLIC_URL+'/images/heart-alt',title:'Избранное',active:'/favourite'}}/>
            <Menu item={{id:5,images:process.env.PUBLIC_URL+'/images/person',title:'Войти',active:'/user'}}/>
        </div>
    );
}

export default MenuList;