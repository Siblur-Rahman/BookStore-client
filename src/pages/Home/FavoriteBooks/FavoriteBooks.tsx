import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const FavoriteBooks = () => {
    const [books, setBooks] = useState();
    useEffect(()=>{
        fetch('bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    })
    return (
        <div className="">
            <BookCard books={books} headline={'Best Seller Books'}/>
        </div>
    );
};

export default FavoriteBooks;