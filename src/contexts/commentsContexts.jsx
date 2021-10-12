import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "../plugins/axios";

const CommentsContext = createContext({

});

const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        (async function fetchComments() {
            const { data: comments } = await axios.get("/posts")
            setComments(comments)
        })()
    }, [])

    return (
        <CommentsContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentsContext.Provider>
    )
}


const useCommentsContext = () => useContext(CommentsContext)

export { useCommentsContext, CommentsProvider };