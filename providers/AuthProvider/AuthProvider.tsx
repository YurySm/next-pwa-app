'use client'
import {FC, PropsWithChildren, useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useActions} from "@/hooks/useActions";
import {usePathname, useRouter} from "next-intl/client";
import {getAccessToken} from "@/services/auth/auth.helper";
import Cookies from "js-cookie";
import {REFRESH_TOKEN} from "@/constans/token.constans";
import {protectedRoutes} from "@/providers/AuthProvider/routes/protectedRoutes";
import {adminRoutes} from "@/providers/AuthProvider/routes/adminRoutes";
import {notFound} from "next/navigation";

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const {user} = useAuth()
    const {checkAuth, logout} = useActions()

    // i18n
    const pathname = usePathname()
    const router = useRouter();

    const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

    const isAdminRoute = adminRoutes.some(route => pathname?.startsWith(route))

    useEffect(() => {
        const accessToken = getAccessToken()
        if(accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        if(!refreshToken && user) logout()
    }, [pathname]);

    if(!isAdminRoute && !isProtectedRoute) return <>{children}</>

    if(user?.isAdmin) return <>{children}</>

    if(user && isProtectedRoute) return <>{children}</>

    if(user && isAdminRoute) return notFound()

    pathname !== '/auth' && router.replace('/auth')

    return null
};



