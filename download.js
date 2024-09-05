async function getTemperature() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Urbino&appid=68f596dee38f888e05ba30c08cc79104');
        const data = await response.json();
        const kelvin = data['main']['temp'];
        // const celsius = 1; //per verificare il corretto funzionamento
        const celsius = kelvin - 273.15;
        console.log(`Temperature in Celsius: ${celsius.toFixed(2)}°C`);
        
        const roundedCelsius = Math.round (celsius);
        console.log (roundedCelsius);
        let nomeFile = 'ClimateReceipt.ttf'; //file di default >:D

        switch (roundedCelsius) { 
            case -4, -3, -2, -1, 0: nomeFile = 'ClimateReceipt-Freezing.zip'; break; 
            case 1: nomeFile = 'ClimateReceipt-Icy.zip'; break; 
            case 2: nomeFile = 'ClimateReceipt-Frosty.zip'; break; 
            case 3: nomeFile = 'ClimateReceipt-Chilly.zip'; break; 
            case 4: nomeFile = 'ClimateReceipt-Cold.zip'; break; 
            case 5: nomeFile = 'ClimateReceipt-Nippy.zip'; break; 
            case 6: nomeFile = 'ClimateReceipt-Brisk.zip'; break; 
            case 7: nomeFile = 'ClimateReceipt-Cool.zip'; break; 
            case 8: nomeFile = 'ClimateReceipt-Crisp.zip'; break; 
            case 9: nomeFile = 'ClimateReceipt-Refreshing.zip'; break; 
            case 10: nomeFile = 'ClimateReceipt-Mild.zip'; break; 
            case 11: nomeFile = 'ClimateReceipt-Temperate.zip'; break; 
            case 12: nomeFile = 'ClimateReceipt-Pleasant.zip'; break; 
            case 13: nomeFile = 'ClimateReceipt-Balmy.zip'; break; 
            case 14: nomeFile = 'ClimateReceipt-Warm.zip'; break; 
            case 15: nomeFile = 'ClimateReceipt-Cozy.zip'; break; 
            case 16: nomeFile = 'ClimateReceipt-Comfy.zip'; break; 
            case 17: nomeFile = 'ClimateReceipt-Toasty.zip'; break; 
            case 18: nomeFile = 'ClimateReceipt-Lukewarm.zip'; break; 
            case 20: nomeFile = 'ClimateReceipt-Agreeable.zip'; break; 
            case 21: nomeFile = 'ClimateReceipt-RoomTemperature.zip'; break; 
            case 22: nomeFile = 'ClimateReceipt-Tepid.zip'; break; 
            case 23: nomeFile = 'ClimateReceipt-MildlyWarm.zip'; break; 
            case 24: nomeFile = 'ClimateReceipt-GentlyWarm.zip'; break; 
            case 25: nomeFile = 'ClimateReceipt-Warmish.zip'; break; 
            case 26: nomeFile = 'ClimateReceipt-Nice.zip'; break; 
            case 27: nomeFile = 'ClimateReceipt-WarmHearted.zip'; break; 
            case 28: nomeFile = 'ClimateReceipt-ComfortablyWarm.zip'; break; 
            case 29: nomeFile = 'ClimateReceipt-FairlyWarm.zip'; break; 
            case 30: nomeFile = 'ClimateReceipt-SomewhatWarm.zip'; break; 
            case 31: nomeFile = 'ClimateReceipt-ModeratelyWarm.zip'; break; 
            case 32: nomeFile = 'ClimateReceipt-Fair.zip'; break; 
            case 33: nomeFile = 'ClimateReceipt-KindOfHot.zip'; break; 
            case 34: nomeFile = 'ClimateReceipt-SlightlyHot.zip'; break; 
            case 35: nomeFile = 'ClimateReceipt-Hot.zip'; break; 
            case 36: nomeFile = 'ClimateReceipt-Sizzling.zip'; break; 
            case 37: nomeFile = 'ClimateReceipt-Sweltering.zip'; break; 
            case 38: nomeFile = 'ClimateReceipt-Scorching.zip'; break;  
            case 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50: nomeFile = 'ClimateReceipt-Blazing.zip'; break; 
            default: 
                console.log("yippee"); 
        }
        

     downloadZIP(`typeface/${nomeFile}`, nomeFile);
     console.log (`typeface/${nomeFile}`+ ', ' + nomeFile);
     } catch (error) {
         console.error('Error:', error);
    }
}

async function downloadZIP(relativePath, fileName) {
    const repoName = 'ClimateReceipt_Specimen';
    const baseUrl = `https://cestels.github.io/${repoName}/`;
    const fileUrl = baseUrl + relativePath;

    try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const blob = await response.blob();
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } catch (error) {
        console.error('File download error:', error);
    }
}

document.getElementById('downloadButton').addEventListener('click', getTemperature);

