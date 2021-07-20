/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "formulas";

/** Formula commands represent formula input objects */
export interface FormulaCommand {}

export interface FormulaCommand_CurvedCalculation {}

/** Unlock formula */
export interface FormulaCommand_CurvedCalculation_Unlock {
  /** x’ = current unix timestamp */
  x: number;
  /** o = start unix timestamp */
  o: number;
  /** a = constant */
  a: number;
  /** c = allocation */
  c: number;
}

/** R = c - (a/d+b) */
export interface FormulaCommand_CurvedCalculation_EarlyBirds {
  c: number;
  a: number;
  b: number;
  d: number;
}

/** R */
export interface FormulaCommand_CurvedCalculation_CalculationResult {
  R: number;
}

export interface FormulaCommand_LinearCalculation {}

/** R = d * (a/t) */
export interface FormulaCommand_LinearCalculation_Unnamed {
  /** d = unix timestamp duration */
  d: number;
  /** a = amount */
  a: number;
  /** t = time to pay amount */
  t: number;
}

/**
 * user with a $5000 investment and a 10% share in a farm that distributes $1000 per day will receive 10% of 365,000 = 36500
 * ROI = 100 * (36500 - 5000) / 5000 = 630%
 */
export interface FormulaCommand_LinearCalculation_ROI {
  /** g = gain from investment */
  g: number;
  /** c = cost of investment */
  c: number;
}

/**
 * after a month, user with a $5000 investment and a 10% share in a farm that distributes $1000 per day will receive 10% of 365,000 = 36500
 * ARR = 100 * (((36500 - 5000) / 5000)^(2)-1 = 3800%
 * after one year, user with a $5000 investment and a 10% share in a farm that distributes $1000 per day will receive 10% of 365,000 = 36500
 * ARR = 100 * (((36500 - 5000) / 5000)^(1/1)-1 = 530%
 * after two years, user with a $5000 investment and a 10% share in a farm that distributes $1000 per day will receive 10% of 730,000 = 73000
 * ARR = 100 * ((73000 - 5000)) / 5000)^(1/2)-1 = 268%
 */
export interface FormulaCommand_LinearCalculation_ARR {
  /** g = gain from investment */
  g: number;
  /** c = cost of investment */
  c: number;
  /** d = holding period */
  d: number;
}

/** A credit card company might charge 1% interest each month. Therefore, the APR equals 12% (1% x 12 months = 12%). */
export interface FormulaCommand_LinearCalculation_APR {
  /** r = periodic rate */
  r: number;
  /** n = number of periods in a year */
  n: number;
}

/** The APY for a 1% rate of interest compounded monthly would be 12.68% [(1 + 0.01)^12 – 1 = 12.68%] a year. */
export interface FormulaCommand_LinearCalculation_APY {
  /** r = periodic rate */
  r: number;
  /** n = number of periods in a year */
  n: number;
}

/** The APY for a 1% rate of interest compounded monthly would be 12.68% [(1 + 0.01)^12 – 1 = 12.68%] a year. */
export interface FormulaCommand_LinearCalculation_TVL {
  /** p = price of locked tokens in $ or GTON */
  p: number;
  /** n = amount of locked tokens */
  n: number;
}

/** R */
export interface FormulaCommand_LinearCalculation_CalculationResult {
  R: number;
}

const baseFormulaCommand: object = {};

export const FormulaCommand = {
  encode(_: FormulaCommand, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FormulaCommand {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFormulaCommand } as FormulaCommand;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FormulaCommand {
    const message = { ...baseFormulaCommand } as FormulaCommand;
    return message;
  },

  toJSON(_: FormulaCommand): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<FormulaCommand>): FormulaCommand {
    const message = { ...baseFormulaCommand } as FormulaCommand;
    return message;
  },
};

const baseFormulaCommand_CurvedCalculation: object = {};

export const FormulaCommand_CurvedCalculation = {
  encode(
    _: FormulaCommand_CurvedCalculation,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_CurvedCalculation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_CurvedCalculation,
    } as FormulaCommand_CurvedCalculation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FormulaCommand_CurvedCalculation {
    const message = {
      ...baseFormulaCommand_CurvedCalculation,
    } as FormulaCommand_CurvedCalculation;
    return message;
  },

  toJSON(_: FormulaCommand_CurvedCalculation): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<FormulaCommand_CurvedCalculation>
  ): FormulaCommand_CurvedCalculation {
    const message = {
      ...baseFormulaCommand_CurvedCalculation,
    } as FormulaCommand_CurvedCalculation;
    return message;
  },
};

const baseFormulaCommand_CurvedCalculation_Unlock: object = {
  x: 0,
  o: 0,
  a: 0,
  c: 0,
};

export const FormulaCommand_CurvedCalculation_Unlock = {
  encode(
    message: FormulaCommand_CurvedCalculation_Unlock,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.x !== 0) {
      writer.uint32(8).int64(message.x);
    }
    if (message.o !== 0) {
      writer.uint32(16).int64(message.o);
    }
    if (message.a !== 0) {
      writer.uint32(24).int64(message.a);
    }
    if (message.c !== 0) {
      writer.uint32(32).int64(message.c);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_CurvedCalculation_Unlock {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_CurvedCalculation_Unlock,
    } as FormulaCommand_CurvedCalculation_Unlock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.o = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.a = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.c = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_CurvedCalculation_Unlock {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_Unlock,
    } as FormulaCommand_CurvedCalculation_Unlock;
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.o !== undefined && object.o !== null) {
      message.o = Number(object.o);
    } else {
      message.o = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = Number(object.a);
    } else {
      message.a = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = Number(object.c);
    } else {
      message.c = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_CurvedCalculation_Unlock): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.o !== undefined && (obj.o = message.o);
    message.a !== undefined && (obj.a = message.a);
    message.c !== undefined && (obj.c = message.c);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_CurvedCalculation_Unlock>
  ): FormulaCommand_CurvedCalculation_Unlock {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_Unlock,
    } as FormulaCommand_CurvedCalculation_Unlock;
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.o !== undefined && object.o !== null) {
      message.o = object.o;
    } else {
      message.o = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    } else {
      message.a = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    } else {
      message.c = 0;
    }
    return message;
  },
};

const baseFormulaCommand_CurvedCalculation_EarlyBirds: object = {
  c: 0,
  a: 0,
  b: 0,
  d: 0,
};

export const FormulaCommand_CurvedCalculation_EarlyBirds = {
  encode(
    message: FormulaCommand_CurvedCalculation_EarlyBirds,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.c !== 0) {
      writer.uint32(8).int64(message.c);
    }
    if (message.a !== 0) {
      writer.uint32(16).int64(message.a);
    }
    if (message.b !== 0) {
      writer.uint32(24).int64(message.b);
    }
    if (message.d !== 0) {
      writer.uint32(32).int64(message.d);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_CurvedCalculation_EarlyBirds {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_CurvedCalculation_EarlyBirds,
    } as FormulaCommand_CurvedCalculation_EarlyBirds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.c = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.a = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.b = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.d = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_CurvedCalculation_EarlyBirds {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_EarlyBirds,
    } as FormulaCommand_CurvedCalculation_EarlyBirds;
    if (object.c !== undefined && object.c !== null) {
      message.c = Number(object.c);
    } else {
      message.c = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = Number(object.a);
    } else {
      message.a = 0;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = Number(object.b);
    } else {
      message.b = 0;
    }
    if (object.d !== undefined && object.d !== null) {
      message.d = Number(object.d);
    } else {
      message.d = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_CurvedCalculation_EarlyBirds): unknown {
    const obj: any = {};
    message.c !== undefined && (obj.c = message.c);
    message.a !== undefined && (obj.a = message.a);
    message.b !== undefined && (obj.b = message.b);
    message.d !== undefined && (obj.d = message.d);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_CurvedCalculation_EarlyBirds>
  ): FormulaCommand_CurvedCalculation_EarlyBirds {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_EarlyBirds,
    } as FormulaCommand_CurvedCalculation_EarlyBirds;
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    } else {
      message.c = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    } else {
      message.a = 0;
    }
    if (object.b !== undefined && object.b !== null) {
      message.b = object.b;
    } else {
      message.b = 0;
    }
    if (object.d !== undefined && object.d !== null) {
      message.d = object.d;
    } else {
      message.d = 0;
    }
    return message;
  },
};

const baseFormulaCommand_CurvedCalculation_CalculationResult: object = { R: 0 };

export const FormulaCommand_CurvedCalculation_CalculationResult = {
  encode(
    message: FormulaCommand_CurvedCalculation_CalculationResult,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.R !== 0) {
      writer.uint32(8).int64(message.R);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_CurvedCalculation_CalculationResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_CurvedCalculation_CalculationResult,
    } as FormulaCommand_CurvedCalculation_CalculationResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.R = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_CurvedCalculation_CalculationResult {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_CalculationResult,
    } as FormulaCommand_CurvedCalculation_CalculationResult;
    if (object.R !== undefined && object.R !== null) {
      message.R = Number(object.R);
    } else {
      message.R = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_CurvedCalculation_CalculationResult): unknown {
    const obj: any = {};
    message.R !== undefined && (obj.R = message.R);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_CurvedCalculation_CalculationResult>
  ): FormulaCommand_CurvedCalculation_CalculationResult {
    const message = {
      ...baseFormulaCommand_CurvedCalculation_CalculationResult,
    } as FormulaCommand_CurvedCalculation_CalculationResult;
    if (object.R !== undefined && object.R !== null) {
      message.R = object.R;
    } else {
      message.R = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation: object = {};

export const FormulaCommand_LinearCalculation = {
  encode(
    _: FormulaCommand_LinearCalculation,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation,
    } as FormulaCommand_LinearCalculation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FormulaCommand_LinearCalculation {
    const message = {
      ...baseFormulaCommand_LinearCalculation,
    } as FormulaCommand_LinearCalculation;
    return message;
  },

  toJSON(_: FormulaCommand_LinearCalculation): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<FormulaCommand_LinearCalculation>
  ): FormulaCommand_LinearCalculation {
    const message = {
      ...baseFormulaCommand_LinearCalculation,
    } as FormulaCommand_LinearCalculation;
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_Unnamed: object = {
  d: 0,
  a: 0,
  t: 0,
};

export const FormulaCommand_LinearCalculation_Unnamed = {
  encode(
    message: FormulaCommand_LinearCalculation_Unnamed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.d !== 0) {
      writer.uint32(8).int64(message.d);
    }
    if (message.a !== 0) {
      writer.uint32(16).int64(message.a);
    }
    if (message.t !== 0) {
      writer.uint32(24).int64(message.t);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_Unnamed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_Unnamed,
    } as FormulaCommand_LinearCalculation_Unnamed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.d = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.a = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.t = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_Unnamed {
    const message = {
      ...baseFormulaCommand_LinearCalculation_Unnamed,
    } as FormulaCommand_LinearCalculation_Unnamed;
    if (object.d !== undefined && object.d !== null) {
      message.d = Number(object.d);
    } else {
      message.d = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = Number(object.a);
    } else {
      message.a = 0;
    }
    if (object.t !== undefined && object.t !== null) {
      message.t = Number(object.t);
    } else {
      message.t = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_Unnamed): unknown {
    const obj: any = {};
    message.d !== undefined && (obj.d = message.d);
    message.a !== undefined && (obj.a = message.a);
    message.t !== undefined && (obj.t = message.t);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_Unnamed>
  ): FormulaCommand_LinearCalculation_Unnamed {
    const message = {
      ...baseFormulaCommand_LinearCalculation_Unnamed,
    } as FormulaCommand_LinearCalculation_Unnamed;
    if (object.d !== undefined && object.d !== null) {
      message.d = object.d;
    } else {
      message.d = 0;
    }
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    } else {
      message.a = 0;
    }
    if (object.t !== undefined && object.t !== null) {
      message.t = object.t;
    } else {
      message.t = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_ROI: object = { g: 0, c: 0 };

export const FormulaCommand_LinearCalculation_ROI = {
  encode(
    message: FormulaCommand_LinearCalculation_ROI,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.g !== 0) {
      writer.uint32(8).int64(message.g);
    }
    if (message.c !== 0) {
      writer.uint32(16).int64(message.c);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_ROI {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_ROI,
    } as FormulaCommand_LinearCalculation_ROI;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.g = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.c = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_ROI {
    const message = {
      ...baseFormulaCommand_LinearCalculation_ROI,
    } as FormulaCommand_LinearCalculation_ROI;
    if (object.g !== undefined && object.g !== null) {
      message.g = Number(object.g);
    } else {
      message.g = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = Number(object.c);
    } else {
      message.c = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_ROI): unknown {
    const obj: any = {};
    message.g !== undefined && (obj.g = message.g);
    message.c !== undefined && (obj.c = message.c);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_ROI>
  ): FormulaCommand_LinearCalculation_ROI {
    const message = {
      ...baseFormulaCommand_LinearCalculation_ROI,
    } as FormulaCommand_LinearCalculation_ROI;
    if (object.g !== undefined && object.g !== null) {
      message.g = object.g;
    } else {
      message.g = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    } else {
      message.c = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_ARR: object = { g: 0, c: 0, d: 0 };

export const FormulaCommand_LinearCalculation_ARR = {
  encode(
    message: FormulaCommand_LinearCalculation_ARR,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.g !== 0) {
      writer.uint32(8).int64(message.g);
    }
    if (message.c !== 0) {
      writer.uint32(16).int64(message.c);
    }
    if (message.d !== 0) {
      writer.uint32(24).int64(message.d);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_ARR {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_ARR,
    } as FormulaCommand_LinearCalculation_ARR;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.g = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.c = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.d = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_ARR {
    const message = {
      ...baseFormulaCommand_LinearCalculation_ARR,
    } as FormulaCommand_LinearCalculation_ARR;
    if (object.g !== undefined && object.g !== null) {
      message.g = Number(object.g);
    } else {
      message.g = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = Number(object.c);
    } else {
      message.c = 0;
    }
    if (object.d !== undefined && object.d !== null) {
      message.d = Number(object.d);
    } else {
      message.d = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_ARR): unknown {
    const obj: any = {};
    message.g !== undefined && (obj.g = message.g);
    message.c !== undefined && (obj.c = message.c);
    message.d !== undefined && (obj.d = message.d);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_ARR>
  ): FormulaCommand_LinearCalculation_ARR {
    const message = {
      ...baseFormulaCommand_LinearCalculation_ARR,
    } as FormulaCommand_LinearCalculation_ARR;
    if (object.g !== undefined && object.g !== null) {
      message.g = object.g;
    } else {
      message.g = 0;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    } else {
      message.c = 0;
    }
    if (object.d !== undefined && object.d !== null) {
      message.d = object.d;
    } else {
      message.d = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_APR: object = { r: 0, n: 0 };

export const FormulaCommand_LinearCalculation_APR = {
  encode(
    message: FormulaCommand_LinearCalculation_APR,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.r !== 0) {
      writer.uint32(8).int64(message.r);
    }
    if (message.n !== 0) {
      writer.uint32(16).int64(message.n);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_APR {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_APR,
    } as FormulaCommand_LinearCalculation_APR;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.n = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_APR {
    const message = {
      ...baseFormulaCommand_LinearCalculation_APR,
    } as FormulaCommand_LinearCalculation_APR;
    if (object.r !== undefined && object.r !== null) {
      message.r = Number(object.r);
    } else {
      message.r = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_APR): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.n !== undefined && (obj.n = message.n);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_APR>
  ): FormulaCommand_LinearCalculation_APR {
    const message = {
      ...baseFormulaCommand_LinearCalculation_APR,
    } as FormulaCommand_LinearCalculation_APR;
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_APY: object = { r: 0, n: 0 };

export const FormulaCommand_LinearCalculation_APY = {
  encode(
    message: FormulaCommand_LinearCalculation_APY,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.r !== 0) {
      writer.uint32(8).int64(message.r);
    }
    if (message.n !== 0) {
      writer.uint32(16).int64(message.n);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_APY {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_APY,
    } as FormulaCommand_LinearCalculation_APY;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.n = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_APY {
    const message = {
      ...baseFormulaCommand_LinearCalculation_APY,
    } as FormulaCommand_LinearCalculation_APY;
    if (object.r !== undefined && object.r !== null) {
      message.r = Number(object.r);
    } else {
      message.r = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_APY): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.n !== undefined && (obj.n = message.n);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_APY>
  ): FormulaCommand_LinearCalculation_APY {
    const message = {
      ...baseFormulaCommand_LinearCalculation_APY,
    } as FormulaCommand_LinearCalculation_APY;
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    } else {
      message.r = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_TVL: object = { p: 0, n: 0 };

export const FormulaCommand_LinearCalculation_TVL = {
  encode(
    message: FormulaCommand_LinearCalculation_TVL,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.p !== 0) {
      writer.uint32(8).int64(message.p);
    }
    if (message.n !== 0) {
      writer.uint32(16).int64(message.n);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_TVL {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_TVL,
    } as FormulaCommand_LinearCalculation_TVL;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.n = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_TVL {
    const message = {
      ...baseFormulaCommand_LinearCalculation_TVL,
    } as FormulaCommand_LinearCalculation_TVL;
    if (object.p !== undefined && object.p !== null) {
      message.p = Number(object.p);
    } else {
      message.p = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_TVL): unknown {
    const obj: any = {};
    message.p !== undefined && (obj.p = message.p);
    message.n !== undefined && (obj.n = message.n);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_TVL>
  ): FormulaCommand_LinearCalculation_TVL {
    const message = {
      ...baseFormulaCommand_LinearCalculation_TVL,
    } as FormulaCommand_LinearCalculation_TVL;
    if (object.p !== undefined && object.p !== null) {
      message.p = object.p;
    } else {
      message.p = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    return message;
  },
};

const baseFormulaCommand_LinearCalculation_CalculationResult: object = { R: 0 };

export const FormulaCommand_LinearCalculation_CalculationResult = {
  encode(
    message: FormulaCommand_LinearCalculation_CalculationResult,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.R !== 0) {
      writer.uint32(8).int64(message.R);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): FormulaCommand_LinearCalculation_CalculationResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFormulaCommand_LinearCalculation_CalculationResult,
    } as FormulaCommand_LinearCalculation_CalculationResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.R = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FormulaCommand_LinearCalculation_CalculationResult {
    const message = {
      ...baseFormulaCommand_LinearCalculation_CalculationResult,
    } as FormulaCommand_LinearCalculation_CalculationResult;
    if (object.R !== undefined && object.R !== null) {
      message.R = Number(object.R);
    } else {
      message.R = 0;
    }
    return message;
  },

  toJSON(message: FormulaCommand_LinearCalculation_CalculationResult): unknown {
    const obj: any = {};
    message.R !== undefined && (obj.R = message.R);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FormulaCommand_LinearCalculation_CalculationResult>
  ): FormulaCommand_LinearCalculation_CalculationResult {
    const message = {
      ...baseFormulaCommand_LinearCalculation_CalculationResult,
    } as FormulaCommand_LinearCalculation_CalculationResult;
    if (object.R !== undefined && object.R !== null) {
      message.R = object.R;
    } else {
      message.R = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
