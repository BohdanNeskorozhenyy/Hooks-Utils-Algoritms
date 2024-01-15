const getDocumentImages = files => new Promise((resolve) => {
    const _URL = window.URL || window.webkitURL;

    const imagesForJoin = [];

    files.forEach((file) => {
        imagesForJoin.push(
            new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    resolve(img);
                };
                img.src = _URL.createObjectURL(file);
            }),
        );
    });

    Promise.all(imagesForJoin).then((results) => {
        resolve(results);
    });
});

const joinImages = files => getDocumentImages(files)
    .then((images) => {
        const canvas = document.createElement('CANVAS');
        const ctx = canvas.getContext('2d');

        let totalHeight = 0;
        let maxWidth = 0;
        for (let i = 0; i < images.length; i++) {
            totalHeight += images[i].height;
            if (maxWidth < images[i].width) {
                maxWidth = images[i].width;
            }
        }

        canvas.width = maxWidth;
        canvas.height = totalHeight;

        let dy = 0;
        for (let j = 0; j < images.length; j++) {
            ctx.drawImage(images[j], 0, dy, images[j].width, images[j].height);
            dy = dy + images[j].height + 1;
        }

        const canvasToBlobPromise = (...args) => new Promise((resolve) => {
            canvas.toBlob((data) => {
                resolve(data);
            }, ...args);
        });

        // const imageData = canvas.toDataURL('image/jpeg', 0.25);
        return canvasToBlobPromise('image/jpeg', 0.25);
    })
    .then(imageBlob => imageBlob);

export default joinImages;