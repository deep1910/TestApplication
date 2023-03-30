import { useEffect, useMemo, useState } from 'react'


const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;


const Timer = ({
    date,
    startTime,
    endTime,
    setFlag,
    setFinishTest
}) => {
    const deadlineTime = endTime ? `${endTime}:00` : `${startTime}:00` //startTime+ ":00"
    const actualDeadline = date + " " + deadlineTime // time format correction.
    const parsedDeadline = useMemo(() => Date.parse(actualDeadline), [actualDeadline])
    const [time, setTime] = useState() //parsedDeadline - Date.now()
    console.log(actualDeadline, parsedDeadline)


    useEffect(() => {
        const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000)
        return () => clearInterval(interval)
    })

    useEffect(() => {
        const flagInterval = setInterval(() => {
            if (parsedDeadline <= Date.now())
                setFlag(false)
        }, 1000)

        return () => clearInterval(flagInterval)
    },)

    useEffect(() => {
        if (time <= 0) {
            setFinishTest(true)
        }
    }, [time])

    return (
        <div className='flex gap-2'>
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <div key={label} className="col-4">
                    <div className="p-4 bg-purple-500 text-white rounded-md w-[5rem] shadow-md">
                        <p className='text-xl text-center font-bold'>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <p className="text-center text-sm">{label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timer