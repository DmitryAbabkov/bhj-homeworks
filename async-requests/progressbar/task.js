const form = document.querySelector('#form');
const inputFile = document.querySelector('#file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percentLoaded = Math.round((event.loaded / event.total) * 100);
            const normalizedProgress = percentLoaded / 100;
            progress.value = normalizedProgress;
        }
    };

    const formData = new FormData();
    formData.append('file', inputFile.files[0]);
    
    xhr.send(formData);
});