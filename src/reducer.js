export const initialState={
    user: null,


};

export const actionTypes={
    SET_USER:"SET_USER",//THIS IS CHANGER THE NULL TO THE VALUE THAT IS ENTERED IN GOOGLE SEARCH BA
    
};

const reducer=(state,action) =>{
    console.log(action);
    switch (action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user:action.user
            }
            default:
                return state
    }

}

export default reducer
