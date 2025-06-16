// =======================================================================
  // ^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)? protocol 
  //  ([w]{3}\.|[w]{3}2\.)? ([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,} Domain name www or www2 
  // localhost -> include this word
  //  [\d]+\.[\d]+\.[\d]+\.[\d]+ -> add ipv4
  //  (\:[\d]+)? -> port 
  // ([\??\/?]+[\/;&a-z\d%_.~+=-]*)? -> query url
  // (\#[\/;&a-z\d%_.~+=-]*)? -> hashtag url
  /**
   * @function isUrl
   * @description - Checks if value is a valid Url.
   * @param { Any } value - Any Value
   * @return {boolean}
   */

const isUrl = ( value )=>/^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(value)
export { isUrl as default}