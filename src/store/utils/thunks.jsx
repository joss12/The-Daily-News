import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const URL_SERV = "http://localhost:3001"

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async({page=1,order="asc",limit='10'},{getState})=>{
        try {
            const res = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`)
        const prevState = getState().posts;

        return{
            items:[...prevState.articles.items, ...res.data],
            page:page,
            end: res.data.length === 0 ? true : false
        }
        } catch (error) {
            throw error
        }
    }
)

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async(id)=>{
        try {
            const res = await axios.get(`${URL_SERV}/posts/${id}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
)

export const addToNewsLetter = createAsyncThunk(
    'user/addToNewsLetter',
    async(data)=>{
        try {
            const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`)
            if(!Array.isArray(findUser.data) || !findUser.data.length){
                const res = await axios({
                    method: 'POST',
                    url: `${URL_SERV}/newsletter`,
                    data:{
                        email:data.email
                    }
                });

                return{
                    newsletter:'added',
                    email:res.data
                }
            }else{
                //faild
                return{
                    newsletter:'failed'
                }
            }
        } catch (error) {
            throw error
        }
    }
)

export const sendMessage = createAsyncThunk(
    'users/sendMessage',
    async(data)=>{
        try {
            await axios({
                method: 'POST',
                url: `${URL_SERV}/contact`,
                data: data
            })
            return true
        } catch (error) {
            throw error
        }
    }
)