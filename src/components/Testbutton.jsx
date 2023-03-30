import { useEffect, useState } from "react"


const TestButton = () => {
    const [count, setCount] = useState(0);
    const [hasData, setHasData ] = useState(false)

    console.log('testbutton');

    useEffect(() => {
        // körs först gången komponenten renderas
        // passar bra att göra ett API anrop här
        console.log('useeffect []');
    }, [])

    useEffect(() => {
         // körs först gången komponenten renderas
        // körs igen varje gång count uppdateras
        console.log('useeffect [count]');
    }, [count])

    useEffect(() => {


        console.log('useeffect [hasData]');
    }, [hasData])




    return (
        <div>
            <button onClick={() => setCount(count + 1) } >Tryck!</button>
            {count}
            <button onClick={() => setHasData(true)}>Simulate got data from api</button>
        </div>
    )
}

export default TestButton