const getCurrentDateTime = () => {
    const currentData = new Date();
    const formattedDate = currentData.toISOString();
    return formattedDate;
}

export {
    getCurrentDateTime,
}