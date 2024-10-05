function downloadPDF() {
    const element = document.querySelector(".resume-container");
    const options = {
        margin: [5, 5, 5, 5], // Smaller margins to fit content better
        filename: 'Resume_Mamta_Gola.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } // Avoid adding unnecessary page breaks
    };

    setTimeout(() => {
        html2pdf().set(options).from(element).save()
            .catch(error => {
                console.error("Error generating PDF:", error);
            });
    }, 500);
}

function downloadResumeAsImage() {
    const element = document.querySelector(".resume-container");

    html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
        // Create a link to trigger the download
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Resume_Mamta_Gola.png';

        // Trigger the download
        link.click();
    }).catch(error => {
        console.error("Error generating image:", error);
    });
}
