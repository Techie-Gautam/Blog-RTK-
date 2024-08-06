import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        title: "",
        description: "",
    },

    blogList: [],
    currentEditedBlogID: null,
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            let copyFormData = { ...state.formData }
            copyFormData = {
                ...copyFormData,
                ...action.payload,
            }

            state.formData = copyFormData
        },

        handleAddTodo: (state, action) => {
            state.blogList.push({
                id: nanoid(),
                ...state.formData,
            })

            state.formData = {
                title: "",
                description: ""
            }

            localStorage.setItem('blogList', JSON.stringify(state.blogList))

        },

        setBlogListOnPageLoad: (state, action) => {
            state.blogList = action.payload.blogList
        },

        handleDeleteBlog: (state, action) => {
            const { currentBlogID } = action.payload
            

            let updatedBlogList = [...state.blogList]

            updatedBlogList = updatedBlogList.filter((singleBlogItem) => singleBlogItem.id !== currentBlogID)

            state.blogList = updatedBlogList
            localStorage.setItem('blogList', JSON.stringify(updatedBlogList))
        },

        setCurrentEditedBlogID: (state, action) => {
            const { currentBlogID } = action.payload

            state.currentEditedBlogID = currentBlogID
        },

        handleEditBlog: (state, action) => {
            let copyBlogList = [...state.blogList]

            const findIndexOfCurrentBlogItem = copyBlogList.findIndex(
                (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogID
            )

            copyBlogList[findIndexOfCurrentBlogItem] = {
                ...copyBlogList[findIndexOfCurrentBlogItem],
                ...state.formData,
            }

            state.blogList = copyBlogList
            localStorage.setItem('blogList', JSON.stringify(copyBlogList))
        }

    }
})

export const { handleInputChange, handleAddTodo, setBlogListOnPageLoad, handleDeleteBlog, setCurrentEditedBlogID, handleEditBlog } = blogSlice.actions

export default blogSlice.reducer