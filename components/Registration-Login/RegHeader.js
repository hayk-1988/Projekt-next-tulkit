
import Link from "next/link";

export function RegHeader() {

    return (
        <div className="registration-header">
            <h1>Create an Account</h1>
            <p>Already have an account?</p>
            <span><Link href='/login'>Login</Link></span>
        </div>
    )
}