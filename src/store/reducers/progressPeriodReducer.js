import moment from "moment-timezone";
import {
  SET_TIME_PERIOD_BIANNUAL,
  SET_TIME_PERIOD_MONTLY,
  SET_TIME_PERIOD_QUARTERLY,
  SET_TIME_PERIOD_WEEKLY
} from "../actions/progressPeriodActions";

const currentTimeZone = moment.tz.guess();
const tzAbbreviation = moment.tz(currentTimeZone).format("z");

const initialState = {
  time_zone: tzAbbreviation,
  start_date: null,
  end_date: moment
    .tz(currentTimeZone)
    .utc()
    .format()
};

export const progressPeriodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_PERIOD_WEEKLY:
      return {
        ...state,
        start_date: moment(state.end_date)
          .subtract(7, "days")
          .utc()
          .format()
      };

    case SET_TIME_PERIOD_MONTLY:
      return {
        ...state,
        start_date: moment(state.end_date)
          .subtract(1, "months")
          .utc()
          .format()
      };

    case SET_TIME_PERIOD_QUARTERLY:
      return {
        ...state,
        start_date: moment(state.end_date)
          .subtract(3, "months")
          .utc()
          .format()
      };

    case SET_TIME_PERIOD_BIANNUAL:
      return {
        ...state,
        start_date: moment(state.end_date)
          .subtract(6, "months")
          .utc()
          .format()
      };

    default:
      return state;
  }
};
