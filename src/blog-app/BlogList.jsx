import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteBlog, handleInputChange, setBlogListOnPageLoad, setCurrentEditedBlogID } from "../store/slices/BlogSlice";

const BlogList = () => {
    const dispatch = useDispatch()
    const { blog } = useSelector((state) => state);
    const { blogList } = blog;

    useEffect(() => {
        dispatch(
            setBlogListOnPageLoad({
                blogList: JSON.parse(localStorage.getItem('blogList')) || []
            })
        )
    }, [])

    function onDeleteBlog(getCurrentBlogID) {
        dispatch(handleDeleteBlog({
            currentBlogID: getCurrentBlogID,
        }))
        dispatch(
            setCurrentEditedBlogID({
                currentBlogID: null
            })
        )
    }

    function onEditBlog(getCurrentBlog) {
        dispatch(
            setCurrentEditedBlogID({
                currentBlogID: getCurrentBlog.id,
            })
        )

        dispatch(
            handleInputChange({
                title: getCurrentBlog.title,
                description: getCurrentBlog.description
            })
        )
    }



    return (
        <div className="blog-list-container">
            {blogList.length > 0 ? (
                blogList.map((singleBlogItem) => (
                    <div key={singleBlogItem.id} className="blog-item">
                        <h3>{singleBlogItem.title}</h3>
                        <p>{singleBlogItem.description}</p>
                        <button onClick={() => onEditBlog(singleBlogItem)}>Edit Blog</button>
                        <button onClick={() => onDeleteBlog(singleBlogItem.id)}>Delete Blog</button>
                    </div>
                ))
            ) : (
                <h1 className="empty-message">BLOG LIST IS EMPTY</h1>
            )}
        </div>
    );
};

export default BlogList;
