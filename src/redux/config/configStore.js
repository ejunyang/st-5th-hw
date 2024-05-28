import { combineReducers, createStore } from "@reduxjs/toolkit";
import texts from "../module/text";

// 1. combineReducers로 리듀서 조합
const rootReducer = combineReducers({ texts });

// 2. 조합한 리듀서들로 스토어 생성
const store = createStore(rootReducer);

export default store;
