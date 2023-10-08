import { useState } from 'react'
import { Service } from '../../../service/service'
import styles from './Home.module.css'
import ui from '../../ui/Button.module.css'

const AllItems = () =>{
    const [searchVal, SetSearch] = useState('')
    const [data, setData] = useState([])
    const [errorhandle, setError] = useState('')

    const handlesearch = async () =>{
        const data1 = await Service.getCity(searchVal)
        if (data1 != '404'){
            setError('')
            setData(data1)
        }else{
            setData('')
            setError(data1)
        }

    }


    const rendercitydata = ()=>{
        if (errorhandle != ''){
        return <div className='flex flex-col justify-center items-center mt-6'>
                <b>Error: {errorhandle}</b>
            </div>
        }else if(data != ''){
            return <div className='flex flex-col justify-center items-center mt-6'>
            <p className={styles.tempvaluewithunit}>Feels Like: { Math.round(data.main.feels_like -273)}</p>
            <p className={styles.valuewithunit}>Humidity { data.main.humidity } %</p>
            <p className={styles.valuewithunit}>Wind { data.wind.speed } m/s</p>
            <p className={styles.valuewithunit}>Clouds { data.clouds.all } %</p>
        </div>
        }else if (data == ''){
        return <div>
            <p>Search weather</p>
        </div>

        }

    }
    const rendercityweather = () =>{
        if (data != ''){
            return <div className={styles.maininfo}>
                    <p className={styles.temp}>{ Math.round(data.main.temp - 273) }</p>
                    <p className={styles.descr}> { data.weather[0].description } </p>
                </div>
        }
    }


    return(
        <div className='flex flex-nowrap justify-center flex-row'>
        <div className={styles.wrapper}>
            <div className={styles.lside}>
                <div className={styles.input}>
                    <input type="text" className={ui.inputui} placeholder='search' value={searchVal} onChange={(event) => SetSearch(event.target.value)} />
                    <a className={ui.btnui} onClick={handlesearch}>search</a>
                </div>
                    {rendercitydata()}
            </div>
            <div className={styles.rside}>
                    {rendercityweather()}
                </div>

        </div>
        </div>
    )
}

export default AllItems