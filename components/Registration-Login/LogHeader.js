import Link from "next/link";


export function LogHeader(){

    return(
        <div className="registration-header">
            <h1>Login</h1>
            <p>Do not have an account?</p>
            <span><Link href='/registration'>Create here</Link></span>
        </div>
    )
}