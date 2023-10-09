import { connect } from "react-redux";
import { sumar, restar, multiplicar, dividir, raizCuadrada, potencia } from '../redux/actions';
import { useState } from "react";

const Calculadora = ({ resultado, sumar, restar, multiplicar, dividir, raizCuadrada, potencia }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOperacion = (operacion) => {
        const num = parseFloat(inputValue);
        if (!isNaN(num)) {
            switch (operacion) {
                case 'SUMAR':
                    sumar(num); // Llama a la acción sumar
                    break;
                case 'RESTAR':
                    restar(num); // Llama a la acción restar
                    break;
                case 'MULTIPLICAR':
                    multiplicar(num); // Llama a la acción multiplicar
                    break;
                case 'DIVIDIR':
                    dividir(num); // Llama a la acción dividir
                    break;
                case 'RAIZCUADRADA':
                    raizCuadrada(); // Llama a la acción raizCuadrada
                    break;
                case 'POTENCIA':
                    potencia(num); // Llama a la acción potencia
                    break;
                default:
                    break;
            }
            setInputValue('');
        } else {
            alert('Ingresa un número válido.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} />
            <br />
            <button onClick={() => handleOperacion('SUMAR')}>Sumar</button>
            <button onClick={() => handleOperacion('RESTAR')}>Restar</button>
            <button onClick={() => handleOperacion('MULTIPLICAR')}>Multiplicar</button>
            <button onClick={() => handleOperacion('DIVIDIR')}>Dividir</button>
            <br />
            <p>Resultado: {resultado}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        resultado: state.resultado,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sumar: (num) => dispatch(sumar(num)), // Llama a la acción sumar con el número
        restar: (num) => dispatch(restar(num)), // Llama a la acción restar con el número
        multiplicar: (num) => dispatch(multiplicar(num)), // Llama a la acción multiplicar con el número
        dividir: (num) => dispatch(dividir(num)), // Llama a la acción dividir con el número
        raizCuadrada: () => dispatch(raizCuadrada()), // Llama a la acción raizCuadrada
        potencia: (num) => dispatch(potencia(num)), // Llama a la acción potencia con el número
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculadora);
