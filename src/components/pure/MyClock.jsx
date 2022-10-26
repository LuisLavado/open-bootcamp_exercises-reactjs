import React, { useEffect, useState } from "react";

const MyClock = () => {
    const objPersona = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
    };
    const [persona, setPersona] = useState(objPersona);

    useEffect(() => {
        const timerID = setInterval(() => {
            setPersona((prevState) => {
                let edad = prevState.edad + 1;
                return {
                    ...prevState,
                    fecha: new Date(),
                    edad,
                };
            });
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {persona.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {persona.nombre} {persona.apellidos}
            </h3>
            <h1>Edad: {persona.edad}</h1>
        </div>
    );

    // const tick = () => {

    // }
};

export default MyClock;
