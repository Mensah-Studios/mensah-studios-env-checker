let BASEURL :string;

if(import.meta.env.IS_LOCAL){
  BASEURL = import.meta.env.LOCAL_URL
}else if(import.meta.env.IS_LOCAL_CONTAINERIZED){
  BASEURL = import.meta.env.LOCAL_CONTAINERIZED_URL
}else if(import.meta.env.IS_LOCAL_STAGING){
  BASEURL = import.meta.env.STAGING_URL
}else{
  BASEURL = import.meta.env.PROD_URL

}
export {BASEURL}