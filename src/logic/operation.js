import Big from 'big.js'
import operator from './operator'
import isNumber from './isNumber'

export default function operation(state, btnName) {
    if (isNumber(btnName)) {
        /* Evita la acumulación innecesaria de 0 */
        if (btnName === 0 && state.next === '0') {
            return {data: 'ninguna'}
        }
        /* Una vez se seleccione una operación, el siguiente número que se ingrese se maneje correctamente,
        ya sea concatenando dígitos a un número en progreso o iniciando un nuevo número */
        if (state.operation) {
            if (state.next) {
                return {
                    ...state,
                    next: state.next + btnName
                }
            }
            return {
                ...state,
                next: btnName
            }
        }
        //next
        if (state.next) {
            const next = state.next === '0' ? btnName : state.next + btnName
            return {
                ...state,
                next,
                total: null,
            }
        }
        return {
            ...state,
            next: btnName,
            total: null,
        }
    }
    // AC
    if (btnName === 'AC') {
        return {
            total: null,
            next: null,
            operation: null,
        }
    }

    // ,
    if(btnName === '.'){
        if (state.next) {
            if (state.next.includes('.')){
                return {}
            }
            return {
                ...state,
                next: state.next + '.'
            }
        }
        return {
            ...state,
            next: '0.'
        }
    }

    // =
    if (btnName === '=') {
        if(state.next && state.operation){
            const result = operator(state.total, state.next, state.operation)
            return {
                total: result,
                next: null,
                operation: null,
            }
        }
        return {}
    }

    // +/-
    if (btnName === '+/-'){
        if(state.next){
            return {
                ...state,
                next: (-1 * parseFloat(state.next).toString())
            }
        }
        if(state.total){
            return {
                ...state,
                total: (-1 * parseFloat(state.total).toString())
            }
        }
        return {}
    }

    // %
    if (btnName === '%') {
        if (state.operation && state.next) {
            const result = operator(state.total, state.next, state.operation)
            return {
                total: Big(result).div(Big('100')).toString(),
                next: null,
                operation: null,
            }
        }
        if(state.next) {
            return {
                ...state,
                next: Big(state.next).div(Big('100')).toString(),
            }
        }
        return {}
    }

    // more
    if (state.operation) {
        return {
            total: operator(state.total, state.next, state.operation),
            next: null,
            operation: btnName
        }
    }

    if(!state.next) {
        return {
            ...state,
            operation: btnName
        }
    }

    return {
        total: state.next,
        next: null,
        operation: btnName
    }

}