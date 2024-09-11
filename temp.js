document.getElementById('generate-pdf').addEventListener('click', () => {
    // Store the content in local storage or pass it in some way
    const content = document.getElementById('content').innerHTML;
    localStorage.setItem('biodataContent', content);
    window.location.href = 'pdf.html';
});
