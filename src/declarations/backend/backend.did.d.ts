import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface FinancialEntry {
  'nICPBalance' : number,
  'exchangeRate' : number,
  'timestamp' : bigint,
}
export interface _SERVICE {
  'addEntry' : ActorMethod<[number, number], undefined>,
  'getEntries' : ActorMethod<[], Array<FinancialEntry>>,
  'getSecondHighestExchangeRate' : ActorMethod<[], [] | [number]>,
  'getTotalICPBalance' : ActorMethod<[], [] | [number]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
