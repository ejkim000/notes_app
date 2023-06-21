const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
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

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    // instead of document, use note
    const deleteBtn = note.querySelector(".delete");
    const editBtn= note.querySelector(".edit");
    const main= note.querySelector(".main");
    const textArea= note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = text;

    deleteBtn.addEventListener("click", ()=>{
        note.remove();
    });

    editBtn.addEventListener("click", ()=>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })


    document.body.appendChild(note);
}



