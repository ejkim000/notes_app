const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => addNewNote('Add new note'));

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <!-- TOOL BAR -->
        <div class="tools">
            <!-- EDIT BTN -->
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <!-- DELETE BTN -->
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="hidden"></div>
        <textarea></textarea>
    `;

    // instead of document, use note
    const deleteBtn = note.querySelector(".delete");
    deleteBtn.addEventListener("click", ()=>{
        note.remove();
    });

    document.body.appendChild(note);
}



