const extractIdFromUrl = (url: string) => {
  const results = url.match(/codesandbox.io.*\-(\w+)$/) || [];
  if (results.length > 1) {
    return results[1];
  }
  return undefined;
};

export default extractIdFromUrl;
