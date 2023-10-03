'use client'

import {persistor, store} from "@/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {PropsWithChildren} from "react";

export const ReduxProvider = ({children}: PropsWithChildren) => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}