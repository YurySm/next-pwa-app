'use client'
import styles from './AuthPageComponent.module.scss'
import {JSX,  useState} from "react";
import {useTranslations} from "next-intl";
import {SubmitHandler, useForm} from "react-hook-form";
import {IEmailPassword} from "@/interfaces/user.interface";
import {validEmail} from "@/utils";
import {useActions} from "@/hooks/useActions";
import {useAuthRedirect} from "@/components/AuthPageComponent/useAuthRedirect";
import {LanguageSwitcher} from "@/components";
import ThemeToggleDynamic from "../ThemeToggle/ThemeToggle";
import {useAuth} from "@/hooks/useAuth";
import {Button, Htag, Input, Loader} from "@/UI";


export function AuthPageComponent(): JSX.Element  {

    useAuthRedirect()

    const t = useTranslations('Auth');

    const { isLoading, isError } = useAuth()

    const {login, register, clearError} = useActions()

    const [type, setType] = useState<'login' | 'register'>('login');

    const {
        register: formRegister,
        control,
        handleSubmit,
        reset,
        formState: {errors}} = useForm<IEmailPassword>({mode: 'onChange'})

    const onSubmit: SubmitHandler<IEmailPassword> = async (data) => {
        if (type === 'login') {
            login(data)

            //?
            setTimeout(() => {
                clearError()
            },5000)
        } else {
            register(data)
        }
        reset()
    }

    return(
        <div
            className={styles.auth}>
            <div
                className={styles.auth__wrapp}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.auth__form}>
                    <Htag
                        className={styles.auth__title}
                        tag={'h1'}>
                        {t('loginTitle')}
                    </Htag>

                    {isLoading && <Loader />}

                    {isError && isError}

                    <Input
                        {...formRegister('email', {
                            required: {
                                value: true,
                                message: 'Введите email'
                            },
                            pattern: {
                                value: validEmail,
                                message: 'Введите email корректно'
                            }
                        })}
                        // type={'email'}
                        error={errors.email}
                        placeholder={'Email'}/>

                    <Input
                        {...formRegister('password', {
                            required: {
                                value: true,
                                message: 'Введите пароль'
                            }
                        })}
                        type={'password'}
                        error={errors.password}
                        className={styles.title}
                        placeholder={'Пароль'}/>

                    <Button appearance={'primary'} type={'submit'}>Войти</Button>
                    {/*<Button*/}
                    {/*    appearance={'ghost'}*/}
                    {/*    type={'button'}*/}
                    {/*    onClick={() => setType(type === 'login' ? 'register' : 'login')}>*/}
                    {/*    {type === 'login' ? 'Register' : 'Login'}*/}
                    {/*</Button>*/}
                </form>
            </div>
            <div className={styles.auth__swichers}>
                <ThemeToggleDynamic/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}