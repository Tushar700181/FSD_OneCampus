document.getElementById('leaveForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    if(!start || !end) {
        alert('Please fill out all dates');
        return;
    }
    if(new Date(start) > new Date(end)) {
        alert('End date cannot be before start date');
        return;
    }
    console.log('Validation passed!');
});
