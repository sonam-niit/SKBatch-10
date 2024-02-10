const initialState={
    items:[],
    total:0
}
const itemReducer= (state=initialState,action)=>{

    switch(action.type){
        case 'ADD_ITEM':
            return {...state,items:[...state.items,action.payload],
                total:state.total+action.payload.product.price}
        case 'REMOVE_ITEM':
            const found= state.items.find(item=>item.id==action.payload);
            return {...state,
                total:state.total-found.product.price,
                items:state.items.filter(item=>item.id!==action.payload),
            }
        default:
            return state;
    }
}

export default itemReducer;