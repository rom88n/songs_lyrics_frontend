export function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} minutes ${seconds} seconds`;
}

export function extractYear(str: string) {
  // Split the string by the underscore character
  const parts = str.split('_');
  // Return the second part, which should be the year
  return parts[1];
}
