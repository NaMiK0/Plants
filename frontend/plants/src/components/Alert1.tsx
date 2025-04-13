import {useEffect, useState} from "react";

// @ts-ignore
const Alert1= ({onClose}) => {
    const [isClosing, setIsClosing] = useState(false);

    //анимация закрытия
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose(); //Вызов onClose после завершения анимации
        }, 300);
    }

    // Автоматическое закрытие через 3 секунды
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed left-1/2 -translate-x-1/2 bottom-4 z-50 w-full max-w-md 
      ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        >
            <div id="alert-border-3"
                 className="flex items-center justify-between  p-2 mb-4 text-green-800 rounded-[9px] border-green-300 bg-green-50 dark:text-white dark:bg-green-600 dark:border-black"
                 role="alert">
                <svg className="shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div className="flex flex-col">
                    <p className="text-[16px] font-[600]">The product has been added to your cart!</p>
                    <p className="text-[14px] font-[400]">Thank you for your choice.</p>
                </div>
                <button
                    type="button"
                    className="flex flex-col items-center justify-center  w-[25px] h-[25px] bg-white rounded-[6px] cursor-pointer text-black hover:text-red-700 hover:bg-gray-200 "
                    onClick={handleClose}
                    data-dismiss-target="#alert-border-3" aria-label="Close"
                >
                    <span className="sr-only">Dismiss</span>
                    <svg className="w-[9px] h-[9px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Alert1;