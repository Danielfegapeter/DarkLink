function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('file-list');
    
    for (const file of fileInput.files) {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.textContent = file.name;
        fileList.appendChild(fileItem);

        // Placeholder for actual upload process
        alert(`File '${file.name}' uploaded successfully!`);
        // In a real application, you'd handle the file upload to the server here
    }

    // Clear the file input after uploading
    fileInput.value = '';
}
