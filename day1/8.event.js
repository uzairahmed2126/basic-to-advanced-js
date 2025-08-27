// if we want to prevent bubbeling then we can use stopPropagation() in parent
document.getElementById("parent").addEventListener("click", (e) => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Child clicked");
});
