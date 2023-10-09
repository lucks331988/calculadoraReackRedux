

const initalState = {
    resultado: 0,
}

const reducer = (state = initalState, action)=>{
    switch (action.type) {
        case 'SUMA':
            return{
                resultado: state.resultado + action.payload,
            }
        case 'RESTA':
            return{
                resultado: state.resultado - action.payload,
            }
        case 'MULT':
            return{
                resultado: state.resultado * action.payload,
            }
        case 'DIV':
            if (action.payload === 0 ) {
                return{
                    resultado: "Error: division por 0",
                }          
            }
                return {
                    resultado: state.resultado / action.payload,
                }
        case 'RAIZ_CUADRADA':
            return{
                resultado: Math.sqrt(state.resultado),
            }
        case 'POTENCIA':
            return{
                resultado: Math.pow(state.resultado, action.payload),
            }
        default:
           return state
    }
}


export default reducer;