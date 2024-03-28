export function countWords(str: string): number {
  // Split the string by various possible separators
  // and filter out empty strings to get accurate word count
  const words = str.split(/[\s,]+/).filter(Boolean);
  return words.length;
}

export function prettifyText(text: string) {
  // Replace periods followed by spaces (end of sentences) with periods and line breaks
  // This is a simple way to break up text into more readable chunks.
  return text.replace(/\n/g, '<br>');
}
