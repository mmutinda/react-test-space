import { useEffect, useState } from 'react';

export default function useLogger(initValue) {
    useEffect(() => {
        console.log(initValue)
    }, [initValue]);
}