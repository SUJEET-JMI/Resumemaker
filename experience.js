function saveExperience() {
    const experienceBlocks = document.querySelectorAll('.experience-block');
    
    // Clear previous data in localStorage
    localStorage.removeItem('experienceData');

    const experienceData = [];

    experienceBlocks.forEach((block) => {
        const job = block.querySelector('input[name="jobTitle"]').value;
        const cname = block.querySelector('input[name="companyName"]').value;
        const jobdur = block.querySelector('input[name="jobDuration"]').value;
        const jobdes = block.querySelector('textarea[name="jobDescription"]').value;

        experienceData.push({
            jobTitle: job,          // Changed from 'job' to 'jobTitle'
            companyName: cname,     // Changed from 'cname' to 'companyName'
            jobDuration: jobdur,    // Changed from 'jobdur' to 'jobDuration'
            jobDescription: jobdes
        });
    });

    localStorage.setItem('experienceData', JSON.stringify(experienceData));
    window.location.href = "skill.html";  // Change to your next page
}

function addNewExperience() {
    const addExperience = document.createElement('div');
    addExperience.classList.add("experience-block", "mb-6");

    addExperience.innerHTML = `
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="jobTitle">Job Title</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="jobTitle" placeholder="e.g., Software Developer" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="companyName">Company Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="companyName" placeholder="e.g., ABC Corp" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="jobDuration">Duration</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="jobDuration" placeholder="e.g., Jan 2020 - Dec 2022" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="jobDescription">Job Description</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="jobDescription" placeholder="Briefly describe your responsibilities and achievements" required></textarea>
        </div>
    `;

    // Append the new experience block to the container
    const expContainer = document.getElementById("additional-experience");
    expContainer.appendChild(addExperience);
}

// Event listener for "Add More" button
document.getElementById('add-more').addEventListener('click', addNewExperience);
