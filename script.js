document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    const overnightCheckbox = document.getElementById('overnight');
    const overnightOptions = document.getElementById('overnight-options');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    // Toggle overnight options visibility
    overnightCheckbox.addEventListener('change', () => {
        if (overnightCheckbox.checked) {
            overnightOptions.classList.remove('hidden');
        } else {
            overnightOptions.classList.add('hidden');
            // Reset radio buttons if unchecked
            const radios = overnightOptions.querySelectorAll('input[type="radio"]');
            radios.forEach(r => r.checked = false);
        }
    });

    // Handle form submission
    rsvpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (overnightCheckbox.checked) {
            const accommodation = rsvpForm.querySelector('input[name="accommodation"]:checked');
            if (!accommodation) {
                showStatus('Bitte wähle eine Übernachtungsmöglichkeit aus.', 'error');
                return;
            }
        }

        // Set loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';
        showStatus('Deine Anmeldung wird übertragen...', '');

        const formData = new FormData(rsvpForm);
        const data = Object.fromEntries(formData.entries());
        
        // Add timestamp
        data.timestamp = new Date().toLocaleString('de-DE');

        try {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwYjLpi_E2gHdTokRmnnQgVleiZTRqDwleChjdsVk7haBjoeH8IeveuQBpiLtJsmvT_/exec';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
                cache: 'no-cache',
                body: formData
            });
            
            showStatus('Vielen Dank für deine Anmeldung! Wir freuen uns auf dich.', 'success');
            rsvpForm.reset();
            overnightOptions.classList.add('hidden');
        } catch (error) {
            console.error('Fehler beim Senden:', error);
            showStatus('Ups! Da ist etwas schiefgelaufen. Bitte versuche es später noch einmal.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Anmeldung absenden';
        }
    });

    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = type; // success or error
        formStatus.classList.remove('hidden');
    }
});
