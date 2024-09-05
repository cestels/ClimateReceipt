function updateDateTime() {
    const now = new Date();

    
    const date = now.toLocaleDateString('it-IT');
    const time = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', hour12: false });

    
    document.getElementById('date-time').textContent = `${date} - ${time}`;
}


window.onload = updateDateTime;