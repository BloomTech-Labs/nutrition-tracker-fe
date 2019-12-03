import { useState, useEffect } from "react";
import moment from "moment-timezone";

const useGroupBy = (interval, dailyLog) => {
  const [groupedDailyLog, setGroupedDailyLog] = useState([]);

  let timeConsumedAt,
    timeConsumedAtHere,
    intervalStart,
    intervalStartHere,
    intervalEnd,
    inclusivity,
    groupIndex,
    groupedLog;

  useEffect(
    () => {
      if (dailyLog.length !== 0) {
        groupIndex = -1;
        groupedLog = [[]];

        dailyLog.forEach((log, i) => {
          timeConsumedAt = log.hasTimeZoneDifference
            ? moment(log.timeConsumedAtThere).utc()
            : moment(log.timeConsumedAt).utc()
          timeConsumedAtHere = log.hasTimeZoneDifference
            ? moment(log.timeConsumedAtHere).utc()
            : null;
          if (
            i === 0 ||
            !timeConsumedAt.isBetween(
              intervalStart.utc(),
              intervalEnd.utc(),
              null,
              inclusivity
            )
          ) {
            beginNewInterval(log.hasTimeZoneDifference);
            if(log.hasTimeZoneDifference) {
              log.intervalStartThere = moment.tz(intervalStart, log.timeZoneThereName).format("h:mm a z")
              log.intervalStartHere = moment.tz(intervalStart, log.timeZoneHereName).format("h:mm a z")
            } else {
              log.intervalStart = moment.tz(intervalStart, log.timeZoneName).format("h:mm a")
            }

            log.firstGroupLog = true;
            
            groupedLog[groupIndex] = [log];
          } else {
            groupedLog[groupIndex].push(log);
          }
          // console.log("[i]            ", i);
          // console.log("[groupIndex]   ", groupIndex);
          // console.log("[timeConsumed] ", timeConsumedAt.format("hh:mma"));
          // console.log("[intervalStart]", intervalStart.format("hh:mma"));
          // console.log("[intervalEnd]  ", intervalEnd.format("hh:mma"));
          // console.log("[between?]     ", timeConsumedAt.isBetween(
          //     intervalStart,
          //     intervalEnd,
          //     null,
          //     inclusivity
          //   ));
          setGroupedDailyLog(groupedLog);
        });
      } else {
        setGroupedDailyLog([])
      }
    },
    [dailyLog, interval]
  );

  function beginNewInterval(logHasTimeZoneDifference) {
    if(logHasTimeZoneDifference) {
      intervalStartHere = getIntervalStart(timeConsumedAtHere, interval);
    }
    intervalStart = getIntervalStart(timeConsumedAt, interval);
    intervalEnd = getIntervalEnd(timeConsumedAt, interval);
    inclusivity = timeConsumedAt.isSame(intervalEnd) ? "[]" : "[)";

    groupIndex++;
  }
  function getIntervalStart(moment, interval) {
    const roundedMinutes = Math.floor(moment.minute() / interval) * interval;
    return moment.clone().minute(roundedMinutes).second(0);
  }

  function getIntervalEnd(moment, interval) {
    interval = moment.minute() === interval ? interval * 2 : interval;
    const roundedMinutes = Math.ceil(moment.minute() / interval) * interval;
    return moment.clone().minute(roundedMinutes).second(0);
  }

  return groupedDailyLog;
};

export default useGroupBy;
