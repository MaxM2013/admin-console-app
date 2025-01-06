import { useState } from "react";

const useSimpleCounter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return {
        counter,
        increment
    }
}

export default useSimpleCounter