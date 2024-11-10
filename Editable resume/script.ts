
//  let form = document.getElementById("resume-form")as HTMLFormElement;
//  let resumeDisplayElement=document.getElementById("resume-display")as HTMLDivElement;

// form.addEventListener("submit",(event:Event)=>{
//     event.preventDefault();

// const name=(document.getElementById("name") as HTMLInputElement).value
// const email=(document.getElementById("email") as HTMLInputElement).value
// const phone=(document.getElementById("phone") as HTMLInputElement).value
// const education=(document.getElementById("education") as HTMLInputElement).value
// const experience=(document.getElementById("experience") as HTMLInputElement).value
// const skills=(document.getElementById("skills") as HTMLInputElement).value


// const resumeHTML=`
// <h2><b>Resume</b></h2>
// <h3> Personal Information </h3>
// <p><b>Name:</b>${name}</p>
// <p><b>Email:</b>${email}</p>
// <p><b>Phone:</b>${phone}</p>

// <h3>Education</h3>
// <p>${education}</p>

// <h3>Experience</h3>
// <p>${experience}</p>

// <h3>Skills</h3>
// <p>${skills}</p>

// `;
// if(resumeDisplayElement){
//     resumeDisplayElement.innerHTML=resumeHTML;
// }else{
// console.error( "The resume displayed");

// }


// } );
// // 

let form = document.getElementById("resume-form") as HTMLFormElement;
let resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Correcting the casting for textarea elements
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    
    // Fix the ID typo for education and cast textarea correctly
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume display element was not found.");
    }
});
