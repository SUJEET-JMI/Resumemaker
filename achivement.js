
function saveAchivement(){
    const achiveblock=document.querySelectorAll('.achivement-block');
        // Clear previous data in localStorage
    localStorage.removeItem('achivementData');
    
    // Create an array to hold education data
    const achivementData = [];

    // Loop through all education blocks and save data
    achiveblock.forEach((block, ) => {
        const achievementTitle =block.querySelector('input[name="achievementTitle"]').value;
        const achievementDescription=block.querySelector('textarea[name="achievementDescription"]').value;
        const achievementDate=block.querySelector('input[name="achievementDate"]').value;
        
        // Add data to the array
        achivementData.push({
            achievementTitle,
            achievementDescription,
            achievementDate
        });
    });
    


    localStorage.setItem('achivementData', JSON.stringify(achivementData));
    
   
    window.location.href="projects.html";
}
function addmoreachievement(){
    const amore=document.createElement('div');
    amore.classList.add("achivement-block");

    amore.innerHTML=`
     <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="achievementTitle">Achievement Title</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="achievementTitle" placeholder="e.g., Top Performer of the Year" required>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="achievementDescription">Achievement Description</label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="achievementDescription" placeholder="Briefly describe the achievement and its significance" required></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="achievementDate">Date of Achievement</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="date" name="achievementDate" required>
                    
                </div>
    `;
    const place=document.getElementById("achievement-additional");
    place.appendChild(amore);

}
document.getElementById("add-more").addEventListener('click',addmoreachievement);

