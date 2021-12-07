const ShowShopInfo = (info) => {
    return(
        <div className="p-b-n">
                    <div className="b-m">
                    <div className="i">
                        <div className="i-m">
                        <div className="i-m-p">
                            <img className="i-m-i" src={info.item.images} loading="lazy" alt="пасхалка" />
                        </div>
                        </div>
                        <div className="b-t-p">
                        <div className="b-t">
                            <div className="z-c-p">
                            <h1 className="z-c">{info.item.title}</h1>
                            <div className="p">
                                <p className="p-t">{info.item.adress}</p>
                                <div className="t-p">
                                <div className="t-p-b">
                                    <div className="i-g">
                                    <img src="/images/clock.svg" alt="Panakea Show" loading="lazy" className="i-g-p" />
                                    <div className="t-t-p">
                                        <h1 className="t-t">{info.item.time}</h1>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="t-p2">
                                <div className="t-p-b">
                                    <div className="i-g">
                                    <img src={info.item.icon} alt="Panakea Show" loading="lazy" className="i-g-p" />
                                    <div className="t-t-p">
                                        <h1 className="t-t">{info.item.status}</h1>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="p-r">
                        <h1 className="h"> 155.55 ₸</h1>
                        <button type="button" className="p-r-b">Выбрать</button>
                        </div>
                    </div>
                    </div>
                </div>
    );
};

export default ShowShopInfo;