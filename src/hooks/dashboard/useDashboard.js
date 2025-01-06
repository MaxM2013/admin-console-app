import { useDispatch, useSelector } from "react-redux";
import { putDashboardData } from "../../store/slice/DashboardSlice";
import useHttp from "../useHttp";

export const useDashboard = () => {

    console.log('exec useDashboard')

    const dispatch = useDispatch()

    const options = useSelector(state => state.dbData.options)

    const { get } = useHttp()

    const queryDashboardTrunk = () => async () => { 
        console.log('in queryDashboard. trunk')
        const res = await get('/api/v1/auth/dbd/sales')
        const options = {
            title: {
              text: '网站访问量'
            },
            tooltip: {},
            xAxis: {
              data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
            },
            yAxis: {},
            series: [
              {
                name: '访问量',
                type: 'bar',
                data: [...res]
              }
            ]
          }
        console.log('in queryDashboard. trunk, options = ', options)
        dispatch(putDashboardData(options))
      }

    const queryDashboard = () => {
        dispatch(queryDashboardTrunk())
    }

    return {
      options,
      queryDashboard
    }

}