import {createStore} from 'redux'


const incrementCount = ({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}
 const store=createStore((state={count:10},action)=>{
    switch(action.type){
        case 'INCREMENT':
    return{
        count:state.count+action.incrementBy
    }
    case'DECREMENT':
    return{
        count:state.count-1
    }
    case'RESET':
    return{
        count:0
    }
   default:
       return state;
    }
    
    
 })
 store.subscribe(()=>{
    console.log(store.getState());
 })
store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy:20}))
store.dispatch({
    type:'DECREMENT'
})
store.dispatch({
    type:'RESET'
})


