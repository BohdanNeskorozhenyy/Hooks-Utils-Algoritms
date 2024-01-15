const removeHTMLFromText = (value: string): string => {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value.replace(/&lt;/g, '%3C').replace(/&gt;/g, '%3E'), 'text/html');
        const textContent = doc.body.textContent || '';
        return textContent;
    } catch (e) {
        return value;
    }
};

export default removeHTMLFromText;