import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const {id} = useParams();
    const [books, setBooks] = useState();
    useEffect(()=>{
        fetch('../../../public/bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data.find(book=> book._id === id)))
    },[])
    console.log(books)
    // const {imageURL, authorName, bookTitle, category, bookDescription, bookPDFURL}= books;
    return (
        <div className="mt-28 px-4 lg:px-24">
            <img src={books?.imageURL} alt="" className="h-96" />
            <h2>{books?.authorName}</h2>
        </div>
    );
};

export default BookDetails;