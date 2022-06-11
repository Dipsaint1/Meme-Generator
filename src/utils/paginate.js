import _ from "lodash";

export function paginate(items, pageNumber, pageSize){
  //Firstly, calculate the starting index of the items on the page
  const startIndex = (pageNumber - 1) * pageSize; 
  // _.slice(items, startIndex);  // Get a new array
  // _.take(pageSize);            // Number of items to take away from the array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

