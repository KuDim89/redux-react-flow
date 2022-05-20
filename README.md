# React flow library integrate with Redux store

1. First of all we install all dependencies it's:
    - `React`;
    - `Redux`;
    - `React-flow`;
2. Create а `store folder` and `index.ts` file inside;
3. Import function `createStore` from `redux`;
4. Create variable `store` end exported this one. First parameter it's a reducer, second - middleware `function applyMiddleware(thunk)`
5. Create reducers folder. Inside create first reducer with name `nodeReducer.ts`;
6. Do `switch/case` construction, in depend on action type will be run different cause;
7. Create `enum` with action type constants
8. Initialize default state of reducer;
9. Crete case inside switch with action type;
10. Create default case which returns state;
11. After finishing working with first reducer I created file `index.ts` inside reducers folder.
12. Import from redux `combineReducer` for union all my reducers;
13. Crete `rootReducer` with one reducer `nodeReducer`;
14. After that in store folder open file `index.ts` and set `rootReducer` as first parametr in `createStore` function;
15. With help method `Provider` from `react-redux` I wrap my `App` component and as props store I set store which I create with help functions `createStore`;
16. After that I create one more reducer with name edgeReducer with similar functionality to the previous.
17. Create component `ButtonAdd`;
18. After that I create button with `className` button and `OnClick` handler;
19. Create `AddNode` function as onClick handler;
20. Import `useDispatch` from react-redux;
21. Inside `AddNode` for help `dispatch` and `action type` I add one more node to `redux store`;  
22. Create component `Flow` inside this component I get storage by means of a hook `useTypedSelector`, this hook it's a hook `useSelector` with types;
23. I use `ReactFlowProvider` and `ReactFlow` from `react-flow`.
24. Inside component I set data from `state` in `edges` and `nodes` props.
25. Also I create `intefaces`, `enuns`, typed `hooks` for strict typing js.
