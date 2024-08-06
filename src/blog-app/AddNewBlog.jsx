import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddTodo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogID,
} from "../store/slices/BlogSlice";

const AddNewBlog = () => {
  const { blog } = useSelector((state) => state);
  const { currentEditedBlogID } = blog;
  const dispatch = useDispatch();

  function onChangeInput(e) {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleTodoSubmit(e) {
    e.preventDefault();
    if (currentEditedBlogID !== null) dispatch(handleEditBlog());
    else dispatch(handleAddTodo());

    if (currentEditedBlogID !== null)
      dispatch(
        setCurrentEditedBlogID({
          currentBlogID: null,
        })
      );
    dispatch(
      handleInputChange({
        title: "",
        description: "",
      })
    );
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleTodoSubmit}>
        <div className="form-group">
          <label htmlFor="title">Enter blog title</label>
          <input
            required
            type="text"
            name="title"
            placeholder="Enter blog title..."
            id="title"
            value={blog?.formData?.title}
            onChange={onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Enter blog description</label>
          <input
            required
            type="text"
            name="description"
            placeholder="Enter blog description..."
            id="description"
            value={blog?.formData?.description}
            onChange={onChangeInput}
          />
        </div>
        <button type="submit">
          {blog.currentEditedBlogID ? "Edit Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
