import API from "../api";

export const getBookings = () =>
  API.get("/bookings");

export const addBooking = (data) =>
  API.post("/bookings", data);

export const deleteBooking = (id) =>
  API.delete(`/bookings/${id}`);