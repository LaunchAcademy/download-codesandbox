const host = "codesandbox.io";
import Url from "url";
const extractIdFromUrl = (urlString: string) => {
  const url = Url.parse(urlString);
  if (url && url.hostname && url.hostname.match(host)) {
    const idSlugMatches = url.pathname?.match(/\/s\/\-?(.*)$/);
    if (idSlugMatches && idSlugMatches.length > 1) {
      if (idSlugMatches[1].includes("-")) {
        //strip out any title for the codesandbox
        return (idSlugMatches[1].match(/\w+$/) || [])[0];
      } else {
        return idSlugMatches[1];
      }
    }
  }
  return undefined;
};

export default extractIdFromUrl;
