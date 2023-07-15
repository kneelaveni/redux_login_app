import classes from "./Counter.module.css";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state)=>state.counter.showCounter)
    const incrementHandler =()=>{
        dispatch(counterActions.increment())
    }
    const increaseHandler =()=>{
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () =>{
        dispatch(counterActions.decrement())
    }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      
      <div>
      
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increse by 10</button>
        <button  onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
// const mapStatesToProps = state =>{
//     return{
//         counter:state.counter,
//     }
// }
// const mapDispatchToProps = ()=>{
// return{
//     increment:()=>{
//         dispatch({type:'increment'})
//     },
//     decrement:()=>{
//         dispatch({type:'decrement'})
//     },
// }
// }
// export default connect(mapStatesToProps,mapDispatchToProps) (Counter);
export default Counter;
