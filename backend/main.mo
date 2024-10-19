import Func "mo:base/Func";
import Int "mo:base/Int";

import Time "mo:base/Time";
import Array "mo:base/Array";
import Float "mo:base/Float";
import Order "mo:base/Order";

actor {
  // Define the structure for financial data entries
  type FinancialEntry = {
    timestamp: Int;
    nICPBalance: Float;
    exchangeRate: Float;
  };

  // Stable variable to store financial entries
  stable var entries: [FinancialEntry] = [];

  // Function to add a new financial entry
  public func addEntry(nICPBalance: Float, exchangeRate: Float) : async () {
    let newEntry: FinancialEntry = {
      timestamp = Time.now();
      nICPBalance = nICPBalance;
      exchangeRate = exchangeRate;
    };
    entries := Array.append(entries, [newEntry]);
  };

  // Function to get all entries
  public query func getEntries() : async [FinancialEntry] {
    entries
  };

  // Function to get the second highest exchange rate
  public query func getSecondHighestExchangeRate() : async ?Float {
    if (entries.size() < 2) {
      return null;
    };
    let sortedRates = Array.sort(
      Array.map(entries, func (entry: FinancialEntry) : Float { entry.exchangeRate }),
      Float.compare
    );
    ?sortedRates[sortedRates.size() - 2]
  };

  // Function to compute the total ICP balance
  public query func getTotalICPBalance() : async ?Float {
    if (entries.size() == 0) {
      return null;
    };
    let latestEntry = entries[entries.size() - 1];
    ?(latestEntry.nICPBalance * latestEntry.exchangeRate)
  };
}
