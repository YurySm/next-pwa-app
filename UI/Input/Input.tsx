import styles from './Input.module.scss'
import { InputProps } from './Input.props';
import cn from 'classnames'
import {roboto} from "@/utils";
import {ForwardedRef, forwardRef, JSX} from "react";

export const Input = forwardRef(({ className, error,  ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

    return (
        <div className={cn(className, `${roboto.className}`, styles.inputWrapp)}>
            <input
                ref={ref}
                className={cn( styles.input, {
                    [styles.error]: error
                })}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error?.message}</span>}
        </div>
    );
})
