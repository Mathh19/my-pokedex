export const extractIdFromUrl = (url?: string) => {
  const regex = /\/(\d+)\/?$/;
  const match = url?.match(regex);

  if (match) {
    return match[1];
  } else {
    return null;
  }
};
