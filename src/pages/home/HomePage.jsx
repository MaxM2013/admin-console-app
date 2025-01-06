import { useEffect, useState } from 'react'
import useHttp from '../../hooks/useHttp'
import Loading from "../../components/Loading";
// import { queryDashboard } from '../../store/slice/DashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useDashboard } from '../../hooks/dashboard/useDashboard';
import Chart from '../../components/Chart.jsx';

const HomePage = () => {

    const { get } = useHttp()

    const { options, queryDashboard } = useDashboard()

    // const options = useSelector(state => state.dbData.options)

    // const data = useSelector(state => state.dbData)

    // const dispatch = useDispatch()

    // const [data, setData] = useState()

    const getData = async () => {
        // console.log('homepage, before get data')
        // const res = await get('/api/v1/auth/dbd/sales')
        // console.log('homepage, res = ', res)
        // setData(res)
        // dispatch(queryDashboard())
    }

    const getData2 = async () => {
        // console.log('homepage, before get data 2')
        // const res = await get('/api/v1/auth/dbd/sales')
        // console.log('homepage, 2.res = ', res)
    }

    useEffect(() => {
        // getData()
        // getData2()
        // console.log('get Data1.2 END.')
        queryDashboard()
    }, [])

    const handleQuery = () => {
        console.log('handleQuery: ', queryDashboard)
        queryDashboard()
    }

    return (
        <>
        <h3>Home</h3>
        <button onClick={() => getData()}>Get Data</button>
        {/* <button onClick={() => dispatch(queryDashboard(get))}>Get Data(Store)</button> */}
        <button onClick={() => handleQuery()}>Get Data(Store)</button>
        <div>
            <Chart options={options} />
        </div>
        <Loading />
        </>
    )
}

export default HomePage