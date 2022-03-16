import axios from "axios"
export const axiosInstance =axios.create(
    {
        baseURL:"https://awesomeblossomsblogs.herokuapp.com/api"
    }
)
