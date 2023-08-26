const editor = document.getElementById('editor'),
editorClear = document.querySelector('.editor__delete');

if(localStorage.getItem('text')) {
    editor.value = JSON.parse(localStorage.getItem('text'));
}

editor.addEventListener('keyup', () => {
    localStorage.setItem('text', JSON.stringify(editor.value));
})

editorClear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('text');
})