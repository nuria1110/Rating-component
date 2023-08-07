import { createContext, useContext } from "react";

export const RatingContext = createContext();
export const useRatingContext = () => useContext(RatingContext);