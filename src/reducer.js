export const initialState = {
    ticketBooking: [],
    user: null
  };

  const reducer =(state, action) =>{
    console.log(action);
    switch(action.type){
        case 'BOOKING_TICKET':
            return{
                ...state,
                ticketBooking:[...state.ticketBooking,action.item],
            };

            default:
                return state;
    }
  }

  export default reducer;