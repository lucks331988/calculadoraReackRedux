

export const sumar = (num)=>{
    return{
        type:'SUMA',
        payload: num
    }
} 

export const restar = (num)=>{
    return{
        type:'RESTA',
        payload: num
    }
} 

export const multiplicar = (num)=>{
    return{
        type:'MULT',
        payload: num
    }
} 
export const dividir = (num)=>{
    return{
        type:'DIV',
        payload: num
    }
} 
export const raizCuadrada = () => {
    return {
      type: 'RAIZ_CUADRADA',
    };
  };
  
  export const potencia = (exponente) => {
    return {
      type: 'POTENCIA',
      payload: exponente,
    }
}