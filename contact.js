
function saveContact(){
    const wn=document.getElementById("whatsappno").value;
    const ln=document.getElementById("LinkedIn").value;
    const contacte=document.getElementById("contactEmail").value;
    const gt=document.getElementById("git").value;
    const whasts="Whatsapp Number:-"+wn;
    const linkd="Linkdin Profile:-"+ln;
    const cont="Contact Email:-"+contacte;
    const gitHUB="Git Hub:-"+gt;
    localStorage.setItem('value7',whasts);
    localStorage.setItem('value8',linkd);
    localStorage.setItem('value9',cont);
    localStorage.setItem('value10',gitHUB);
    window.location.href="summary.html"
}
