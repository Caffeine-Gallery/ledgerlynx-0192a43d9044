import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  const entryForm = document.getElementById('entryForm');
  const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];

  entryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nICPBalance = parseFloat(document.getElementById('nICPBalance').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    await backend.addEntry(nICPBalance, exchangeRate);
    await updateEntriesTable();
    entryForm.reset();
  });

  async function updateEntriesTable() {
    const entries = await backend.getEntries();
    entriesTable.innerHTML = '';

    entries.forEach(entry => {
      const row = entriesTable.insertRow();
      row.insertCell(0).textContent = new Date(Number(entry.timestamp) / 1000000).toLocaleString();
      row.insertCell(1).textContent = entry.nICPBalance.toFixed(6);
      row.insertCell(2).textContent = entry.exchangeRate.toFixed(6);
    });
  }

  await updateEntriesTable();
});
