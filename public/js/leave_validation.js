document.getElementById('leaveForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;
    
    if(!start || !end) {
        alert('Please fill out all dates, validation failed');
        return;
    }
    
    try {
        const res = await fetch('/api/leave', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ startDate: start, endDate: end, reason: reason })
        });
        if(res.ok) {
            alert('Leave applied successfully');
        }
    } catch(err) {
        console.error('Error submitting leave', err);
    }
});
