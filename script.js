const addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => addNewNote());

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote(note));
}

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    // instead of document, use note
    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = text;

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });

    editBtn.addEventListener("click", () => {
        // return true/false depends on it has hidden class or not 
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    // e: event parameter 
    // input event fires when change in textarea, input, select
    // check Event Bubling how to prevent it
    // Check Event Capturing oposit direction to bubbling
    // use capture parameter "true / false" at the end
    textArea.addEventListener('input', (e) => {
        //console.log(e);
        // capture every values input in the textarea
        const value = e.target.value;
        // main will have same value
        main.innerHTML = value;

        updateLS();
    });


    document.body.appendChild(note);
}

function updateLS() {
    // get all notes
    const notesText = document.querySelectorAll('textarea');

    // save to the notes array
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    // console.log(notes, notesText);

    // save to the local storage
    localStorage.setItem('notes', JSON.stringify(notes));
}

// // Local Storage :  key/value set
// localStorage.setItem('name', 'EJ');
// localStorage.getItem('name');
// localStorage.removeItem('name');

// // to save other type of value
// let arr=['EJ', 'Kim', 'Lee'];
// localStorage.setItem('studentNames', JSON.stringify(arr));
// JSON.parse(localStorage.getItem('studentNames'));
// localStorage.removeItem('studentNames')