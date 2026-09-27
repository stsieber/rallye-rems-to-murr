# Rallye Rems-to-Murr - Stefans 50. Geburtstag

Diese Webseite dient als Einladung und Anmeldeportal für die Rallye Rems-to-Murr am 19.06.2027.

## Projektstruktur
- `index.html`: Das Grundgerüst der Webseite im Vintage-Rallye-Stil.
- `style.css`: Das Design (Farben, Schriften, Layout).
- `script.js`: Die Logik für das Formular und den Versand an Google Sheets.
- `Code.gs`: Der Programmcode für Google Apps Script (Backend).
- `save-the-date.png`: Das zentrale Bild für die Einladung.

## Einrichtung der Google Sheets Anbindung

Um die Anmeldungen in einem Google Sheet zu speichern, folge diesen Schritten:

1.  **Google Sheet erstellen:** Erstelle ein neues leeres Google Sheet.
2.  **Script-Editor öffnen:** Gehe im Menü auf `Erweiterungen` -> `Apps Script`.
3.  **Code kopieren:** Lösche den vorhandenen Code im Editor und kopiere den Inhalt der Datei `Code.gs` hinein. Speichere das Projekt.
4.  **Setup ausführen (Optional):** Wähle oben in der Toolbar die Funktion `setup` aus und klicke auf `Ausführen`. Dies erstellt die Kopfzeilen in deinem Sheet.
5.  **Veröffentlichen:**
    - Klicke oben rechts auf `Bereitstellen` -> `Neue Bereitstellung`.
    - Wähle als Typ `Web-App`.
    - Beschreibung: "Rallye Anmeldung API".
    - Ausführen als: `Ich` (deine E-Mail).
    - Wer hat Zugriff: `Jeder` (Wichtig, damit das Formular Daten senden kann).
    - Klicke auf `Bereitstellen` und kopiere die **Web-App-URL**.
6.  **URL in Webseite einfügen:**
    - Öffne die Datei `script.js`.
    - Ersetze den Platzhalter `YOUR_GOOGLE_SCRIPT_URL_HERE` in Zeile 33 durch deine kopierte Web-App-URL.

## Anpassung der Texte
- Den Einladungstext kannst du direkt in der `index.html` im Bereich `<div class="invitation-text">` anpassen.
- Das Anmelde-Deadline-Datum findest du in der `index.html` unter `<h2>Anmeldung zur Rallye</h2>`.

## Lokale Vorschau
Du kannst die `index.html` einfach in deinem Browser öffnen, um die Seite anzusehen. Das Formular zeigt im Demo-Modus (ohne Script-URL) eine Erfolgsmeldung an, sendet aber keine echten Daten.
