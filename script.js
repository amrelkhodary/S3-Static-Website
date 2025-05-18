document.addEventListener('DOMContentLoaded', function() {
    const helloText = document.getElementById('hello-text');
    const factDisplay = document.getElementById('fact-display');
    
    const s3Facts = [
        "Amazon S3 stands for Simple Storage Service.",
        "S3 provides 99.999999999% (11 9's) of durability.",
        "S3 can host static websites with custom domain names.",
        "S3 was launched in 2006 as AWS's first public service.",
        "S3 supports versioning to preserve, retrieve, and restore every version of an object.",
        "S3 offers different storage classes optimized for different use cases.",
        "You can use S3 to store and distribute content for websites and mobile applications.",
        "S3 automatically scales to handle high request rates.",
        "S3 has a general limit of 5TB for a single object size."
    ];
    
    helloText.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * s3Facts.length);
        factDisplay.textContent = s3Facts[randomIndex];
    });
});
