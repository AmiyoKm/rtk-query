"use client"
import React from "react";
import { store } from "./store";
import { Provider} from "react-redux";

const ProviderWithRedux = ({ children } : {children : React.ReactNode}) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default ProviderWithRedux