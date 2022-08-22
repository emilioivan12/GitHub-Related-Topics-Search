/**
 * Here it should be all the process to sanitize any string
 * before to sent to the server.
 * @param str
 */
export const sanitizeString = (str: string): string => {
  str = str.split(" ").join("-");
  str = str.replace(/[^a-z0-9áéíóúñü .,_-]/gim, "");
  return str.trim().toLowerCase();
};
