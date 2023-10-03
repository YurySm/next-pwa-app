'use client'
import Link from "next/link";
import {HeaderAuthProps} from "@/components/Header/HeaderAuth/HeaderAuth.props";
import {JSX} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useActions} from "@/hooks/useActions";
import {Button} from "@/UI";

export const HeaderAuth = ({...props}: HeaderAuthProps): JSX.Element => {
    const isAuth = false

    const {user} = useAuth()
    const {logout} = useActions()

    return (
        <>
            <div
                {...props}>
                {
                    user ?

                        <>
                            <Link href="/profile">Личный кабинет</Link>
                            <Button
                                onClick={logout}
                                appearance={'ghost'}>Выйти</Button>
                        </>
                        :
                        <>
                            <Link href="/auth">Войти</Link>
                            {/*<Link href="/register">Зарегистрироваться</Link>*/}
                        </>
                }
            </div>
        </>

    )
}

