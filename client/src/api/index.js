import axios from 'axios';

const url = 'http://localhost:5006/posts';
const anime_url = 'http://localhost:5006/manga';
const query1 = '?q=kaiju';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const getManga = (searchQuery) => axios.get(anime_url`${searchQuery.search || 'none'}`);


