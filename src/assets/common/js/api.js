import axios from 'axios'
import  '@/assets/mock/mockdata'

export const posts = ()=>{ return axios.get('posts');}
