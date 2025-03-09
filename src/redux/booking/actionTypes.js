import { ADDBOOKING, REMOVEBOOKING } from "./action";

export const addBooking = (value) => {
  return {
    type: ADDBOOKING,
    payload: value,
  };
};
export const removeBooking = (value) => {
  return {
    type: REMOVEBOOKING,
    payload: value,
  };
};
