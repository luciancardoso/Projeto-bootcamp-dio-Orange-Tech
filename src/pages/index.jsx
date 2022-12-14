import { useState, useEffect, useMemo } from "react";

const Teste = () => {

    const [name, setName] = useState('Lucian');

    const handleChangeName = () => {
        setName(prev => prev === 'Lucian' ? 'Pablo' : 'Lucian')
    }

    //useMemo = referencia em variaveis (const, var, let)
    // useCallback = referencia de funcao.

    const calculo = useMemo(() => {
        console.log('calculou')
        return 10 * 250
    }, [])

    console.log('renderizou', calculo);

    return(
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { Teste }