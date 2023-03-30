import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(getTime());

        let intervalId = setInterval(() => {
            let newTime = getTime();
            setTime(newTime);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>
            Time is: {time}
        </div>
    )
}

const getTime = () => {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


export default Clock;