// Only prepare a message in the visitor's chosen app; nothing is submitted here.
function waterbusMessage(values) {
  const [year, month, day] = values.date.split('-');
  return [
    'Aanvraag Waterbus',
    '',
    `Naam: ${values.name.trim()}`,
    `Gewenste datum: ${day}-${month}-${year}`,
    `Gewenst tijdstip: ${values.time || 'In overleg'}`,
    `Aantal personen: ${values.people}`,
    `Wensen of toelichting: ${values.notes.trim() || 'Geen aanvullende wensen'}`,
    '',
    'Ik bespreek graag de mogelijkheden. De aanvraag is definitief na persoonlijke bevestiging.'
  ].join('\r\n');
}
function waterbusLink(channel, values) {
  const message = encodeURIComponent(waterbusMessage(values));
  return channel === 'whatsapp'
    ? `https://wa.me/31610761118?text=${message}`
    : `mailto:bgmkoot@gmail.com?subject=Aanvraag%20Waterbus&body=${message}`;
}
const reservationForm = document.querySelector('#reservation-form');
reservationForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!reservationForm.reportValidity()) return;
  const values = Object.fromEntries(['name', 'date', 'time', 'people', 'notes'].map(id => [id, document.getElementById(id).value]));
  window.location.href = waterbusLink(event.submitter?.value || 'email', values);
});
