import axios from "axios";


export const onGetEvent = ({rate = "hourly" }) =>{
    const url = `http://localhost:5555/events/${rate}`;
    return axios.get(url).then(data =>{
        console.log(data);
        return data
    })
}