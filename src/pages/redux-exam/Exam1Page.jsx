import useSimpleCounter from '../../hooks/redux/useSimpleCounter'
import React from 'react'

const Exam1 = () => {

    const {counter, increment} = useSimpleCounter()

    return (
        <>
        <h3>Exam1</h3>
        <Child1 no="1" counter={counter} increment={increment.bind(this)}/>
        <Child1 no="2" counter={counter} increment={increment.bind(this)} />
        <Child1 no="3" counter={counter} increment={increment.bind(this)}/>

        </>
    )
}

const Child1 = ({no, counter, increment}) => {

    // const {counter, increment} = useSimpleCounter()

    return (
        <>
        <div onClick={increment}>{ `SimpleCounter No.${no} -  ${counter}`}</div>
        </>
    )
}


export default Exam1