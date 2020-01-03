import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/********************************************************
 *                 USE FETCH BY DISPATCH                 *
 ********************************************************/

// dispatches an action inside the useEffect hook
// takes action, args (arguments of the action to be dispatched)
//  and dependencies ()
export const useFetchByDispatch = (action, args) => {
  const dispatch = useDispatch();
  // isLoaded is true when the firebase profile the firebase user has been loaded
  const isLoaded = useSelector(state => state.firebase.profile.isLoaded);

  args = [...Object.values(args)];

  useEffect(() => {
    if (isLoaded) dispatch(action(...args));
  }, [isLoaded, ...args]);
};
