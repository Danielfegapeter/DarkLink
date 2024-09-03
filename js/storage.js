import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('file-list');
    const storage = getStorage();

    for (const file of fileInput.files) {
        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            }, 
            (error) => {
                alert(`Error uploading file: ${error.message}`);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const fileItem = document.createElement('div');
                    fileItem.classList.add('file-item');
                    fileItem.innerHTML = `<a href="${downloadURL}" target="_blank">${file.name}</a>`;
                    fileList.appendChild(fileItem);

                    alert(`File '${file.name}' uploaded successfully!`);
                });
            }
        );
    }

    // Clear the file input after uploading
    fileInput.value = '';
}
