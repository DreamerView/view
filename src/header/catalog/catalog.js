import CatalogList from './catalog-list';

const Catalog = () => {
    return(
        <div className="panel-select">
              <CatalogList item={{images:'/images/pill.svg',title:'Лекарство'}} />
              <CatalogList item={{images:'/images/container.svg',title:'БАДы и Витамины'}} />
              <CatalogList item={{images:'/images/secure.svg',title:'Гигиенические средства'}} />
              <CatalogList item={{images:'/images/makeup-palette.svg',title:'Косметика'}} />
              <CatalogList item={{images:'/images/book.svg',title:'Детские товары'}} />
              <CatalogList item={{images:'/images/healthcare.svg',title:'Медицинские приборы'}} />
              <CatalogList item={{images:'/images/favorite.svg',title:'Питание и спорт'}} />
              <CatalogList item={{images:'/images/zoo.svg',title:'Зоотовары'}} />
        </div>
    )
};

export default Catalog;
