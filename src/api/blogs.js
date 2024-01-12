import axiosInstance from "./api";

// Function to fetch blogs from the API
export async function fetchBlogs() {
    const response = await axiosInstance.get("api/blogs");
    return response.data;
}

export async function createBlog(blog) {
    const response = await axiosInstance.post("api/blogs", blog);
    return response.data;
}
