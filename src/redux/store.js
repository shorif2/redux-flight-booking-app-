import { applyMiddleware, createStore } from "redux";
import bookingReducer from "./booking/bookingReducer";

const myLogger = (store) => (next) => (action) => {
  const { flightBooking } = [action].reduce(bookingReducer, store.getState());
  console.log(flightBooking);
  if (flightBooking.length < 4) {
    next(action);
    alert("Booking successful! Proceeding...");
  } else {
    alert("Booking limit exceeded! Action declined.");
  }
};

const store = createStore(bookingReducer, applyMiddleware(myLogger));

export default store;
