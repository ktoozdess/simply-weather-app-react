import axios from 'axios'


export const Service = {
    // async getAll() {
    //     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=5da9443f61d4ff0755b6d1860ea75d22')
    //     return response.data
    // },
    async getCity(city) {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5da9443f61d4ff0755b6d1860ea75d22`)
            return response.data
        } catch(err){
            console.log(err);
            if (err.response.data.cod == '404'){
                return err.response.data.cod
            }
    }
}
}