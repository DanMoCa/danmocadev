import toast, {Toaster} from 'react-hot-toast';
import {useEffect} from "react";
import {usePage} from "@inertiajs/react";
export default function PageToast({}){
    const page = usePage();
    const toastFlash = page.props.toast;

    useEffect(() => {
        if(toastFlash?.message){
            toast[toastFlash.type](toastFlash.message);
        }
    }, [toastFlash]);
    return (
        <>
            <Toaster/>
        </>
    )
}