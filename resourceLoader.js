// resourceLoader.js
function loadStylesScriptsResource(url) {
    if (url.endsWith('.css')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    } else if (url.endsWith('.js')) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    } else {
        console.error('Unsupported styles or script file type:', url);
    }
}

// Parse URL parameters
const params = new URLSearchParams(window.location.search);
const stylesScriptsUrls = params.getAll('file'); // getAll for multiple values

if (stylesScriptsUrls.length > 0) {
    stylesScriptsUrls.forEach(fileUrl => {
        loadStylesScriptsResource(fileUrl);
    });
} else {
    console.error('No styles/scripts URLs provided in the query parameters.');
}