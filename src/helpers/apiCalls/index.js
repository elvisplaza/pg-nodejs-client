import axios from "axios";


export const onGetEvent = ({rate = "hourly" }) =>{
    const url = `http://localhost:5555/events/${rate}`;
    return axios
      .get(url)
      .then(data => {
        return data.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
}

export const onGetStats = ({rate = "hourly"}) =>{
    const url = `http://localhost:5555/stats/${rate}`;
    return axios.get(url).then(data => {
      return data.data
    
    }).catch(err =>{
          console.log(err)
          throw err
      })
}

export const onGetPOI = () =>{
      const url = `http://localhost:5555/poi`;
      return axios.get(url).then(data => {
        return data.data
       
      }).catch(err =>{
          console.log(err)
          throw err
      })
}