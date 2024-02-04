export const getFileNameImage = (imageUrl) => {
    const match = imageUrl.match(/\/v\d+\/([^/]+)\./);
    if (match && match[1]) {
        const publicId = match[1];
        return publicId;
    } else {
        console.error('Could not extract public ID from the URL');
    }
}