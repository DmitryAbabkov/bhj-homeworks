const form = document.querySelector('#form');
const progress = document.getElementById( 'progress' );

progress.value = 0.4;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                xhr.upload = function(event) {
                    // if(xhr.lengthComputable)
                    progress.value = event.loaded;
                    // {console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );}
                    // console.log(event)
                  }
            }
        }
    }
    // xhr.upload = function(event) {
    //     // if(xhr.lengthComputable)
    //     // console.log(event.loaded)
    //     {console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );}
    //     console.log(event)
    //   }

    //   xhr.onload = xhr.onerror = function() {
    //     if (this.status == 200) {
    //       console.log("success");
    //     } else {
    //         console.log("error " + this.status);
    //     }
    //   };
    xhr.send();
})
