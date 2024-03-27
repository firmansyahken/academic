export const formatterName = (str) => {
    let formattedWords = str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let formattedText = formattedWords.join(' ');
    formattedText = formattedText.slice(0, formattedText.lastIndexOf('.'));
    return formattedText;
}