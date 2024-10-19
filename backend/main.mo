import Func "mo:base/Func";
import Int "mo:base/Int";

import Time "mo:base/Time";
import Array "mo:base/Array";
import Float "mo:base/Float";

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
}
