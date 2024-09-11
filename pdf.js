document.getElementById('download-pdf').addEventListener('click', () => {
    const content = localStorage.getItem('biodataContent');
    
    if (content) {
        // Generate PDF using jsPDF or html2pdf
        const doc = new jsPDF(); // or use html2pdf library
        doc.text(content, 10, 10); // This is a simple example, adjust as needed
        doc.save('biodata.pdf');
    } else {
        alert('No content found');
    }
});
