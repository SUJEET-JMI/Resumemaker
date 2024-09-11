function saveProjects(){
    const Projectsblock=document.querySelectorAll('.projects-block');
        // Clear previous data in localStorage
    localStorage.removeItem('ProjectsData');
    
    // Create an array to hold education data
    const ProjectsData = [];

    // Loop through all education blocks and save data
    Projectsblock.forEach((block, index) => {
        const projectsName = block.querySelector('input[name="projectsName"]').value;
        const ProjectDescription = block.querySelector('textarea[name="ProjectDescription"]').value;
        
        // Add data to the array
        ProjectsData.push({
            projectsName,
            ProjectDescription
            
        });
    });
    


    localStorage.setItem('ProjectsData', JSON.stringify(ProjectsData));
    
   
    window.location.href="language.html"
}
function addmoreprojects(){
    const amore=document.createElement('div');
    amore.classList.add("projects-block");

    amore.innerHTML=`
     <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="projectsName">PROJECT NAME</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="projectsName" placeholder="e.g., Online Resume Builder" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProjectDescription">Project Description</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="ProjectDescription" placeholder="e.g.,briefly describe your project,tools used,and your roles" required></textarea>
            </div>
    `;
    const place=document.getElementById("additional-projects");
    place.appendChild(amore);

}
document.getElementById("add-more").addEventListener('click',addmoreprojects);

