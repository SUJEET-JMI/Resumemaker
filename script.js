// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");
// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });
function displayEducationData() {
    const educationSummaryDiv = document.getElementById('educationSummary');
    
    // Retrieve education data from localStorage
    const educationData = JSON.parse(localStorage.getItem('educationData')) || [];
    
    // Generate HTML for each education entry
    educationData.forEach(edu => {
        const educationHTML = `
        <div class=" flex gap-5">
                <h3 class="text-xl font-bold text-gray-700">${edu.highestEducation}</h3>
                <p class="text-gray-600">${edu.university}</p>
                <p class="text-gray-600">Year of Passing: ${edu.graduationYear}</p>
            </div>
                   
        `;
        educationSummaryDiv.insertAdjacentHTML('beforeend', educationHTML);
    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displayEducationData);

function displayExpreienceData() {
    const expreienceSummaryDiv = document.getElementById('expreienceSummary');
    
    // Retrieve education data from localStorage
    const experienceData = JSON.parse(localStorage.getItem('experienceData')) || [];
    
    // Generate HTML for each education entry
    experienceData.forEach(exp => {
        const expreienceHTML = `
        <div class="flex text-sm text-gray-700 gap-5">
                        <h1 class="font-semibold text-xl text-indigo-900">${exp.jobTitle}</h1>
                        <p class="text-indigo-600 mt-2">${exp.companyName}</p>
                        <p class="mt-2">${exp.jobDuration}</p>
                        <p class="mt-2">${exp.jobDescription}</p>
                    </div>
                   
        `;
        expreienceSummaryDiv.insertAdjacentHTML('beforeend', expreienceHTML);
    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displayExpreienceData);

function displaycertificateData() {
    const certificateSummaryDiv = document.getElementById('certificatesummary');
    
    // Retrieve education data from localStorage
    const certificateData = JSON.parse(localStorage.getItem('certificateData')) || [];
    
    // Generate HTML for each education entry
    certificateData.forEach(exp => {
        const certificateHTML = `
        <div class="flex text-sm text-gray-700 gap-5">
                        <h1 class="font-semibold text-xl text-indigo-900">${exp.certificationName}</h1>
                        <p class="text-indigo-600 mt-2">${exp.certificationDate}</p>
                    </div>
                   
        `;
        certificateSummaryDiv.insertAdjacentHTML('beforeend',certificateHTML);
    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displaycertificateData);
function displaycertificateData() {
    const certificateSummaryDiv = document.getElementById('certificatesummary');
    
    // Retrieve education data from localStorage
    const certificateData = JSON.parse(localStorage.getItem('certificateData')) || [];
    
    // Generate HTML for each education entry
    certificateData.forEach(exp => {
        const certificateHTML = `
        <div class="flex text-sm text-gray-700 gap-5">
                        <h1 class="font-semibold text-xl text-indigo-900">${exp.certificationName}</h1>
                        <p class="text-indigo-600 mt-2">${exp.certificationDate}</p>
                    </div>
                   
        `;
        certificateSummaryDiv.insertAdjacentHTML('beforeend',certificateHTML);
    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displaycertificateData);

function displayachivementData() {
    const achievementSummaryDiv = document.getElementById('achievementsummary');
    
    // Retrieve education data from localStorage
    const achivementData = JSON.parse(localStorage.getItem('achivementData')) || [];
    
    // Generate HTML for each education entry
    achivementData.forEach(exp => {
        const achivementHTML = `
        <div class="flex text-sm text-gray-700 gap-5">
                        <h1 class="font-semibold text-xl text-indigo-900">${exp.achievementTitle}</h1>
                        <p class="text-indigo-600 mt-2">${exp.achievementDescription}</p>
                        <p class="text-indigo-600 mt-2">${exp.achievementDate}</p>

                    </div>
                   
        `;
        // achievementSummaryDiv.insertAdjacentHTML('beforeend',achivementHTML);
        achievementSummaryDiv.insertAdjacentHTML('beforeend', achivementHTML);


    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displayachivementData);
// Function to display projects data from localStorage
function displayProjectsData() {
    
    const projectsSummaryDiv = document.getElementById('projectsummary');
    
    // Retrieve projects data from localStorage
    const ProjectsData = JSON.parse(localStorage.getItem('ProjectsData')) || [];
    
    
    // Generate HTML for each project entry
    ProjectsData.forEach(project => {
        const projectsHTML = `
            <div class="flex text-sm text-gray-700 gap-5">
                <h1 class="font-semibold text-xl text-indigo-900">${project.projectsName}</h1>
                <p class="text-indigo-600 mt-2">${project.ProjectDescription}</p>
            </div>
        `;
        
        // Append the project HTML to the projects summary div
        projectsSummaryDiv.insertAdjacentHTML('beforeend', projectsHTML);
    });
}

// Call the function to display data on page load
document.addEventListener('DOMContentLoaded', displayProjectsData);
window.onload=function(){
document.getElementById('downloadBtn').addEventListener('click',()=>{
 const data=this.document.getElementById("data");
 html2pdf().from(data).save();
})};
   
       


const fulln=localStorage.getItem('value1');
const contactn=localStorage.getItem('value2');
const emailn=localStorage.getItem('value3');
const addressn=localStorage.getItem('value4');
const personalsummar=localStorage.getItem('value5');

const t=localStorage.getItem('value12');
const o=localStorage.getItem('value13');
const langu=localStorage.getItem('value21');
const whatsn=localStorage.getItem('value7');
const lnk=localStorage.getItem('value8');
const eddtess=localStorage.getItem('value9');
const gittt=localStorage.getItem('value10');


 document.querySelector('#name').innerHTML=fulln;
 document.querySelector('#mobileno').innerHTML=contactn;
 document.querySelector('#email').innerHTML=emailn;
 document.querySelector('#writeaddress').innerHTML=addressn;
 document.querySelector('#technit').innerHTML=t;
 document.querySelector('#others').innerHTML=o;
 document.querySelector('#lan').innerHTML=langu;
 document.querySelector('#ps').innerHTML=personalsummar;
 
 document.querySelector('#whatt').innerHTML=whatsn;
 document.querySelector('#eaddress').innerHTML=eddtess;
 document.querySelector('#link').innerHTML=lnk;
 document.querySelector('#gith').innerHtml=gittt;




 
 
    




