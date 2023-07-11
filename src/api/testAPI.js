import axios from "../utils/axios"

export const test = async () => {
    const result = await axios.get(`/login`)
    return result.data
}