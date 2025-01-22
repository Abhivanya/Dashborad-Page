import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useEffect } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  // const showMessage = useCallback(() => {
  //   return "hii";
  // }, []);

  const showMessage = () => {
    return "hii";
  };

  console.log("Parent function rendering", count);
  return (
    <div>
      <Child showMessage={showMessage} />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
const Child = React.memo(({ showMessage }) => {
  console.log("child function rendering");
  return <div>{showMessage()}</div>;
});

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2; // Simulate a heavy computation
  };

  const computedValue = useMemo(() => expensiveCalculation(count), [count]); // Runs only when `count` changes

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

const App = () => {
  return (
    <>
      {/* <Parent /> */}
      <ExpensiveComponent />
    </>
  );
};



// // context api
// import { createContext } from "react";

// // 1
// const userContext = createContext({"u can pass the strucute"})

// // 2
// const UserContextProvider = ({children})=>{

//   return <userContext.Provider value={{setCOunt,count}}>
//       {children}
//   </userContext.Provider>
// }

// // 3
// <userContextProvider>
//   <App />
// </userContextProvider>

// // 4
// import {userContext} from '../userContext'
// const {count,setCount} = useContext(userContext)

// // Redux
// import { createStore } from "redux";

// // inital state
// const initalState = { count: 0 };

// // 1 define reducer
// const reducer = (state = initalState, action) => {
//   if ((action.type = "INCREMENT")) {
//     return { ...state, count: state.count + 1 };
//   }
//   return state;
// };

// // 2 creaate store
// const store = createStoe(reudcer);

// // 3 Provider
// <Provider store={store} >
//   <App />
// </Provider>

// // 4 get value and send action (react-redux)
// const count = useSelector((state) => state.count);
// const dispatch = useDispatch();

// (onclick) => dispatch({ type: "INCREMENT", payload: "optional" });

// redux toolkit
// import {
//   configureStore,
//   createSlice,
//   createAsyncThunk,
// } from "@reduxjs/toolkit";

// // 1 create slice

// const counterSLice = createSlice({
//   name: "counter",
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//   },
// });

// // export actions
// export const { increment, decrement } = counterSLice.actions;

// // 3 configure store
// const store = configureStore({
//   reducer: counterSLice.reducer,
// });

// // 4 Provider
// <Provider store={store} >
//   <App />
// </Provider>

// // 5 get value and send action (react-redux)
// const count = useSelector((state) => state.count);
// const dispatch = useDispatch();

// (onclick) => dispatch(increment());
