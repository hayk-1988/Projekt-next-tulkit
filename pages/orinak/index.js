import React from 'react';
import Acardion from "../../components/filter/Acardion";
import {useRouter} from "next/router";

const Index = () => {
    const rout = useRouter()

    console.log(rout)
    return (
        <div>
            <Acardion/>
        </div>
    );
};

export default Index;