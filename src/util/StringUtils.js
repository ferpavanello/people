export default class StringUtils {
  /* Make first letter Upp and the rest Low */
  static title = string => {
    const words = string
      .split(" ")
      .map(str => str[0].toUpperCase() + str.slice(1).toLowerCase());
    return words.join(" ").trim();
  };
}
