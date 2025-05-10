ocument.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const quantity = form.elements['quantity'].value;
    const adresse = form.elements['adresse'].value;

    // Afficher la confirmation
    document.getElementById('confirmationMessage').style.display = 'block';

    const details = document.getElementById('details');
    details.innerHTML = `
        <strong>Quantité :</strong> ${quantity} FCFA<br />
        <strong>Adresse de livraison :</strong> ${adresse}
    `;

    // Optionnel : réinitialiser le formulaire
    form.reset();
});