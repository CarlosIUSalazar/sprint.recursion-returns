/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
const getElementsByClassName = (className, node) => {
  // YOUR CODE HERE

  let results = [];

  if (!node) {
    node = document.body;
  } else {
    node;
  }

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
    //console.log('AAAAAAAAA',node);
  }

  let children = node.childNodes;
  if (children) {
    for (let child of children) {
      results = results.concat(getElementsByClassName(className, child));
      //console.log('BBBBBBBBBB',results)
    }
  }
  return results;
};

module.exports = { getElementsByClassName };

// const getElementsByClassName = (className) => {
//   let output = []
//   let dom = document.documentElement

//   let findClass = function(node){
//     if (node.classList && node.classList.contains(className)){
//       output.push(node)
//     }
//     if (node.childNodes){
//       node.childNodes.forEach((element) => {
//         findClass(element)
//       })
//     }
//   }

//   findClass(dom)
//   return output
// };

// module.exports = { getElementsByClassName };
