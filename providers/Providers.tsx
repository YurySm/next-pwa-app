'use client'
import {PropsWithChildren} from "react";
import {ReduxProvider} from "@/providers/ReduxProvider/ReduxProvider";
import {ThemeProvider} from "@/providers/ThemeProvider/ThemeProvider";
import {AuthProvider} from "@/providers/AuthProvider/AuthProvider";


export default function Providers({ children }: PropsWithChildren<unknown>) {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </ReduxProvider>
    );
};


