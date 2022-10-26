import "./App.css";
import ContactsComponent from "./components/container/contacts.component";
// import Clock from "./components/pure/Clock";
// import MyClock from "./components/pure/MyClock";

function App() {
    return (
        <div className="App">
            {/* <ContactsComponent></ContactsComponent> */}
            {/* Ejercicios sesiones 4, 5 y 6 */}
            {/* <div className="ll-row">
                    <div className="ll-col-6">
                        <Clock></Clock>
                    </div>
                    <div className="ll-col-6">
                        <MyClock></MyClock>
                    </div>
                </div> */}
            {/* Ejercicios sesiones 7, 8 y 9: */}
            {/* En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades: */}
            {/* Mostrar contacto.
                Crear contacto.
                Eliminar contacto.
                Cambiar el estado del contacto entre Conectado y Desconectado. */}
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <ContactsComponent></ContactsComponent>
            </div>
        </div>
    );
}

export default App;
