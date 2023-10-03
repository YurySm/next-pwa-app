import {usePathname, useRouter} from "next-intl/client";
import {useEffect} from "react";
import {useAuth} from "@/hooks/useAuth";

export const useAuthRedirect = () => {
    const {user} = useAuth()

    // i18n
    // const pathname = usePathname()
    const router = useRouter();

    useEffect(() => {
        if(user) {
            router.replace('/')
        }
    },[user])
}