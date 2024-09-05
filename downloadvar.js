function downloadFile() {
    const link = document.createElement('a');
    link.href = './ClimateReceipt.ttf';
    link.download = 'ClimateReceipt.ttf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
                