import axios from "axios"

export const getCoordinates = async (targetAddress) => {
    targetAddress = '227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh'
    const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${targetAddress}&key=AIzaSyCCHpoIZsIIMd8lt-3gn9JoAfO4WmgJEss`)

    return {
        latitude: result.data.results[0].geometry.location.lat,
        longitude: result.data.results[0].geometry.location.lng
    }
}