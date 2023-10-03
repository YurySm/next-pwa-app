import styles from './Textarea.module.scss'
import { TextareaProps } from './Textarea.props';
import cn from 'classnames'
import { roboto} from "@/utils";
import {ForwardedRef, forwardRef, JSX} from "react";

export const Textarea = forwardRef(({ className,  error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

    return (
        <div className={cn(className,  styles.textareaWrapp)}>
                <textarea
                    ref={ref}
                    className={cn(`${roboto.className}`,styles.textarea, {
                        [styles.error]: error
                    })}
                    rows={4}
                    {...props}
                />

            {error && <span className={styles.errorMessage}>{error?.message}</span>}
        </div>
    );
})
