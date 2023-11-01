module.exports = {
  pageBreakBefore: function (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
    return currentNode.style && currentNode.style.indexOf('pdf-pagebreak-before') > -1
  }
}
