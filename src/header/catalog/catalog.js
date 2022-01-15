import CatalogList from './catalog-list';

const Catalog = () => {
    return(
        <div className="panel-select">
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/pill.svg',title:'Лекарство'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/container.svg',title:'БАДы и Витамины'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/secure.svg',title:'Гигиенические средства'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/cosmetic.svg',title:'Косметика'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/book.svg',title:'Детские товары'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/healthcare.svg',title:'Медицинские приборы'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/favourite.svg',title:'Питание и спорт'}} />
              <CatalogList item={{images:process.env.PUBLIC_URL+'/images/zoo.svg',title:'Зоотовары'}} />
        </div>
    )
};

export default Catalog;
