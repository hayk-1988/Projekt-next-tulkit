// import {Checkbox} from "./Checkbox";
//
//
// export function RadiosReg({setChecked, setCheckedClient, isCheckedClient }){
//
//
//     return(
//         <div className="radio-bar">
//             <label className='radio-reg' htmlFor="female">
//                 <input type="radio" name="radio" id='female' value={'female'} checked={isCheckedClient.checked}  onChange={(e) => {
//                     setCheckedClient({
//                         checked: e.target.checked,
//                         value: e.target.value
//                     })
//                 }}/>
//                 female
//             </label>
//
//             <label  className='radio-reg' htmlFor="male">
//                 <input type="radio" name="radio" id='male' value={'male'} checked={!isCheckedClient.checked}  onChange={(e) => {
//                     setCheckedClient({
//                         checked: !e.target.checked,
//                         value: e.target.value
//                     })
//                 }}/>
//                 male
//             </label>
//             <Checkbox setChecked={setChecked} text={`I agree to terms & Policy.`}/>
//         </div>
//
//     )
// }