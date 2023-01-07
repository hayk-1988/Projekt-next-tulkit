
import s from './RegLog.module.css'

export function Checkbox({setChecked, text}){


    return(
        <div className={s['checkbox-bar']}>
        <input className={s['checkbox']}  type="checkbox" id='checkbox'  onChange={(e) => {
            setChecked({
                checked: !e.target.checked
            })
        }}/>
        <label className={s['checkbox-label']} htmlFor="checkbox">
            {text}
        </label>
        </div>
    )
}