/* eslint-disable */
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "constants";

export enum TimestampDuration {
  YEAR = 0,
  SIX_MONTHS = 2,
  FOUR_WEEKS = 3,
  TWO_WEEKS = 4,
  ONE_WEEK = 5,
  FIVE_DAYS = 6,
  ONE_DAY = 7,
  UNRECOGNIZED = -1,
}

export function timestampDurationFromJSON(object: any): TimestampDuration {
  switch (object) {
    case 0:
    case "YEAR":
      return TimestampDuration.YEAR;
    case 2:
    case "SIX_MONTHS":
      return TimestampDuration.SIX_MONTHS;
    case 3:
    case "FOUR_WEEKS":
      return TimestampDuration.FOUR_WEEKS;
    case 4:
    case "TWO_WEEKS":
      return TimestampDuration.TWO_WEEKS;
    case 5:
    case "ONE_WEEK":
      return TimestampDuration.ONE_WEEK;
    case 6:
    case "FIVE_DAYS":
      return TimestampDuration.FIVE_DAYS;
    case 7:
    case "ONE_DAY":
      return TimestampDuration.ONE_DAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimestampDuration.UNRECOGNIZED;
  }
}

export function timestampDurationToJSON(object: TimestampDuration): string {
  switch (object) {
    case TimestampDuration.YEAR:
      return "YEAR";
    case TimestampDuration.SIX_MONTHS:
      return "SIX_MONTHS";
    case TimestampDuration.FOUR_WEEKS:
      return "FOUR_WEEKS";
    case TimestampDuration.TWO_WEEKS:
      return "TWO_WEEKS";
    case TimestampDuration.ONE_WEEK:
      return "ONE_WEEK";
    case TimestampDuration.FIVE_DAYS:
      return "FIVE_DAYS";
    case TimestampDuration.ONE_DAY:
      return "ONE_DAY";
    default:
      return "UNKNOWN";
  }
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
