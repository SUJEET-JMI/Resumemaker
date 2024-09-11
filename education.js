// Function to save education data to localStorage
function saveEducation() {
    // Retrieve all education blocks
    const educationBlocks = document.querySelectorAll('.education-block');
    
    // Clear previous data in localStorage
    localStorage.removeItem('educationData');
    
    // Create an array to hold education data
    const educationData = [];

    // Loop through all education blocks and save data
    educationBlocks.forEach((block, index) => {
        const highestEducation = block.querySelector('input[name="highestEducation"]').value;
        const university = block.querySelector('input[name="university"]').value;
        const graduationYear = block.querySelector('input[name="graduationYear"]').value;
        
        // Add data to the array
        educationData.push({
            highestEducation,
            university,
            graduationYear
        });
    });

    // Save the array in localStorage
    localStorage.setItem('educationData', JSON.stringify(educationData));
    
    // Redirect to the next page
    window.location.href = "expreience.html";
}

// Function to add new education fields dynamically
function AddNew() {
    const addeduc = document.createElement('div');
    addeduc.classList.add("education-block", "mb-6");

    addeduc.innerHTML = `
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="highestEducation">Highest Education</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="highestEducation" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="university">University/College</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="university" required>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="graduationYear">Year of Graduation</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="graduationYear" required>
        </div>
    `;

    // Append the new education block to the container
    const eduContainer = document.getElementById("additional-educations");
    eduContainer.appendChild(addeduc);
}

// Event listener for "Add More" button
document.getElementById('add-more').addEventListener('click', AddNew);
