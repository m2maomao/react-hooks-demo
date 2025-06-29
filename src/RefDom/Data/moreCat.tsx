const setupCatList = () => {
  const catList = [];
  for(let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }
  return catList;
}
export {
  setupCatList
}