import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a4d5c17475fc49189034bf0cd94db57e"
    }
})

 