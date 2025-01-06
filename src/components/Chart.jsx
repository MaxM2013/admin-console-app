import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart = ({options})=>{
  const chartRef = useRef(null)
  let chartInstance = null

  function renderChart(){
    console.log('renderChart...')
    try {
      const renderedInstance = echarts.getInstanceByDom(chartRef.current)
      if (renderedInstance) {
        chartInstance = renderedInstance
      }else{
        chartInstance = echarts.init(chartRef.current)
      }
      chartInstance.setOption(options)
    } catch (error) {
      chartInstance && chartInstance.dispose()
    }
  }

  function resizeHandler(){
    chartInstance.resize()
  }

  useEffect(()=>{
    renderChart()
    return ()=>{
      chartInstance && chartInstance.dispose()
    }
  },[])

  return (
    <>
      <div style={{height:'350px'}} ref={chartRef} ></div>
    </>
  )
}

export default Chart