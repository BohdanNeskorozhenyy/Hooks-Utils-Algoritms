const b64toBlob = (image, sliceSize) => {
    // Split the base64 string in data and contentType
    const block = image.split(';');
    // Get the content type of the image
    const contentType = block[0].split(':')[1];// In this case "image/gif"
    // get the real base64 content of the file
    const realData = block[1].split(',')[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

    sliceSize = sliceSize || 512;

    const byteCharacters = atob(realData);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

export default b64toBlob;