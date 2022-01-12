import { useEffect, useState } from 'react';
import Item1 from "./item1";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const ItemList1 = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=> {
        const db = getFirestore();
        onSnapshot(collection(db, "list"),(result) => {
            setPosts(result.docs.map(doc=>doc.data()));
        });
    },[])
    // console.log(p);
    return(
    <div className="b">
        {posts.map(post=>
            <Item1 item={post} key={post.id} />
        )}
    </div>
);
};

export default ItemList1;