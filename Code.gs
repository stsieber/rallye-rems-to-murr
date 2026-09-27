/**
 * Google Apps Script für die Rallye Rems-to-Murr Anmeldung
 * 
 * Dieses Script empfängt POST-Requests vom Anmeldeformular der Webseite
 * und schreibt die Daten in eine neue Zeile des Google Sheets.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const parameter = e.parameter;
    
    // Spalten definieren (müssen mit den 'name' Attributen im HTML übereinstimmen)
    const timestamp = new Date().toLocaleString('de-DE');
    const teamName = parameter.team_name || '';
    const driverFirst = parameter.driver_firstname || '';
    const driverLast = parameter.driver_lastname || '';
    const coDriverFirst = parameter.co_driver_firstname || '';
    const coDriverLast = parameter.co_driver_lastname || '';
    const kid1 = parameter.kid1 || '';
    const kid2 = parameter.kid2 || '';
    const kid3 = parameter.kid3 || '';
    const overnight = parameter.overnight || 'Nein';
    const accommodation = parameter.accommodation || '';

    // Daten in das Sheet schreiben
    sheet.appendRow([
      timestamp, 
      teamName, 
      driverFirst, 
      driverLast, 
      coDriverFirst, 
      coDriverLast, 
      kid1, 
      kid2, 
      kid3, 
      overnight, 
      accommodation
    ]);

    // Erfolg zurückmelden
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Fehler zurückmelden
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Setup-Funktion, um die Kopfzeile im Sheet zu erstellen (optional einmalig ausführen)
 */
function setup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    "Zeitstempel", 
    "Team-Name", 
    "Fahrer Vorname", 
    "Fahrer Nachname", 
    "Beifahrer Vorname", 
    "Beifahrer Nachname", 
    "Kind 1", 
    "Kind 2", 
    "Kind 3", 
    "Übernachtung", 
    "Unterkunft"
  ]);
}
