import { useEffect } from 'react'
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
} from "../../store/slice/counterSlice";
import { Button } from "antd";

const ReduxCounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const store = useStore()

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      console.log('subscribe, value(from store) = ', store.getState().counter.value)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <div>
        <DisplayPanel />
      </div>
      <div>
        <AddButton />
      </div>
      <div>
        <MiunsButton />
      </div>
      <div>
        <DisplayPanel />
      </div>
      <div>
        <DisplayParamsPanel value={count} />
      </div>
      <div>
        <AsyncAddButton />
      </div>
    </>
  );
};

const DisplayPanel = () => {
  const count = useSelector((state) => state.counter.value);
  const store = useStore()

  console.log('store = ', store.getState().counter.value)

  return (
    <>
      <div>{`当前的 count: ${count}`}</div>
      <div>{`从Store中直接获取count: ${store.getState().counter.value}`}</div>
    </>
  );
};

const DisplayParamsPanel = (props) => {

  console.log('[in DisplayParamsPanel] count = ', props)

  return (
    <>
      <div>{`[With Params]当前的 count: ${props.value}`}</div>
    </>
  );
};

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={() => dispatch(increment())}>
        Increment
      </Button>
    </>
  );
};

const MiunsButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </>
  );
};

const ChangeStateButton = () => {
  const store = useStore()

  return (
    <>
      <Button type="primary" onClick={() => store.getState().counter.value = store.getState().counter.value + 1}>
        Change State
      </Button>
    </>
  );
};

const AsyncAddButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={() => dispatch(incrementAsync(5))}>
        Async Increment
      </Button>
    </>
  );
};


export default ReduxCounterPage;
