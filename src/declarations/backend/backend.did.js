export const idlFactory = ({ IDL }) => {
  const FinancialEntry = IDL.Record({
    'nICPBalance' : IDL.Float64,
    'exchangeRate' : IDL.Float64,
    'timestamp' : IDL.Int,
  });
  return IDL.Service({
    'addEntry' : IDL.Func([IDL.Float64, IDL.Float64], [], []),
    'getEntries' : IDL.Func([], [IDL.Vec(FinancialEntry)], ['query']),
    'getSecondHighestExchangeRate' : IDL.Func(
        [],
        [IDL.Opt(IDL.Float64)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
