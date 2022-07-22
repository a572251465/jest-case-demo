import axios from 'axios'

export const getData = () => axios.get('/api').then((res) => res.data)
