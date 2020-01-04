import moment from "moment-timezone";
import {
  SET_TIME_PERIOD_BIANNUAL,
  SET_TIME_PERIOD_MONTLY,
  SET_TIME_PERIOD_QUARTERLY,
  SET_TIME_PERIOD_WEEKLY
} from "../actions/progressPeriodActions";

const currentTimeZone = moment.tz.guess();
const tzAbbreviation = moment.tz(currentTimeZone).format("z");

const today = moment
  .tz(currentTimeZone)
  .utc()
  .format();

const lastWeek = moment
  .tz(currentTimeZone)
  .subtract(1, "weeks")
  .utc()
  .format();

// initializes initialState to the period of last week
const initialState = {
  time_zone: tzAbbreviation,
  start_date: lastWeek,
  end_date: today,
  period: "weekly"
};

export const progressPeriodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_PERIOD_WEEKLY:
      return {
        ...state,
        start_date: moment
          .tz(currentTimeZone)
          .subtract(1, "weeks")
          .utc()
          .format(),
        period: "weekly"
      };

    case SET_TIME_PERIOD_MONTLY:
      return {
        ...state,
        start_date: moment
          .tz(currentTimeZone)
          .subtract(1, "months")
          .utc()
          .format(),
        period: "monthly"
      };

    case SET_TIME_PERIOD_QUARTERLY:
      return {
        ...state,
        start_date: moment
          .tz(currentTimeZone)
          .subtract(3, "months")
          .utc()
          .format(),
        period: "quarterly"
      };

    case SET_TIME_PERIOD_BIANNUAL:
      return {
        ...state,
        start_date: moment
          .tz(currentTimeZone)
          .subtract(6, "months")
          .utc()
          .format(),
        period: "biannual"
      };

    default:
      return state;
  }
};
