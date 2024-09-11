function saveCertificate(){
    const cetificateblock=document.querySelectorAll('.certificate-block');
        // Clear previous data in localStorage
    localStorage.removeItem('certificateData');
    
    // Create an array to hold education data
    const certificateData = [];

    // Loop through all education blocks and save data
    cetificateblock.forEach((block, index) => {
        const certificationName = block.querySelector('input[name="certificationName"]').value;
        const certificationDate = block.querySelector('input[name="certificationDate"]').value;
        
        // Add data to the array
        certificateData.push({
            certificationName,
            certificationDate
            
        });
    });
    


    localStorage.setItem('certificateData', JSON.stringify(certificateData));
    
   
    window.location.href="achivement.html"
}
function addmorecertificate(){
    const amore=document.createElement('div');
    amore.classList.add("certificate-block");

    amore.innerHTML=`
     <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="certificationName">Certification Name</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="certificationName" placeholder="e.g., AWS Certified Solutions Architect" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="certificationDate">Date of Certification</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" name="certificationDate" required>
            </div>
    `;
    const place=document.getElementById("additional-certificate");
    place.appendChild(amore);

}
document.getElementById("add-more").addEventListener('click',addmorecertificate);

