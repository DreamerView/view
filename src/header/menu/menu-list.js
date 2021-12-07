import Menu from './menu';

const MenuList = () => {
    return(
        <div className="menu-select">
            <Menu item={{images:'/images/pills',title:'Каталог',active:'/'}}/>
            <Menu item={{images:'/images/shopping-sale',title:'Для вас',active:'/foryou'}}/>
            <Menu item={{images:'/images/shopping-basket',title:'Корзина',active:'/basket'}}/>
            <Menu item={{images:'/images/heart-alt',title:'Избранное',active:'/favourite'}}/>
            <Menu item={{images:'/images/person',title:'Войти',active:'/user'}}/>
        </div>
    );
}

export default MenuList;