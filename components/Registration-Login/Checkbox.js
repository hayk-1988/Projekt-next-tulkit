

export function Checkbox({setChecked, text}){


    return(
        <div className='checkbox-bar'>
        <input className='checkbox'  type="checkbox" id='checkbox'  onChange={(e) => {
            console.log(e.target.checked)
            setChecked({
                checked: !e.target.checked
            })
        }}/>
        <label className='checkbox-label'  htmlFor="checkbox">
            {text}
        </label>
        </div>
    )
}