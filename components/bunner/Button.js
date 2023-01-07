import s from './Banner.module.css'

export function Button({className,  buttonDescription}) {

    return (
        <a href="#" className={className}>{buttonDescription}<span className={s.btn__row}>➙</span>
        </a>

    )
}