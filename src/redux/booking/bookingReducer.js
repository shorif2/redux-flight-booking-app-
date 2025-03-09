import { ADDBOOKING, REMOVEBOOKING } from "./action";

const initialState = {
  flightBooking: [
    {
      id: "m80vm87qpnnwz",
      from: "Rajshahi",
      to: "Dhaka",
      date: "11-05-25",
      guests: "2",
      ticketclassName: "Business",
    },
  ],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOKING: {
      return {
        ...state,
        flightBooking: [...state.flightBooking, action.payload],
      };
    }
    case REMOVEBOOKING: {
      return {
        ...state,
        flightBooking: [
          ...state.flightBooking.filter(
            (booking) => booking.id !== action.payload
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default bookingReducer;
