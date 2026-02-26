let droppedCount = 0;

const draggables = document.querySelectorAll(".draggable");
const college = document.getElementById("college");
const result = document.getElementById("result");

draggables.forEach(item => {
    item.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
    e.dataTransfer.setData("id", e.target.id);
}

college.addEventListener("dragover", e => {
    e.preventDefault();
});

college.addEventListener("drop", e => {
    e.preventDefault();

    const id = e.dataTransfer.getData("id");
    const element = document.getElementById(id);

    college.appendChild(element);

    droppedCount++;

    if(droppedCount === 2) {
        result.classList.remove("hidden");
    }
});
