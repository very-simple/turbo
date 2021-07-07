/**
 * Copy all attributes from the source element to the target element.
 */
const copyAttributes = (source: Element, target: Element) => {
  for (let i = 0; i < source.attributes.length; i++) {
    target.setAttribute(source.attributes[i].name, source.attributes[i].value)
  }
}

/**
 * Copy a script tag by creating a new one and copying all attributes and
 * content from the specified script. This is necessary as scripts that that are
 * copied with `script.cloneNode()` are note evaluated.
 */
const copyScript = (script: HTMLScriptElement) => {
  const copy = document.createElement('script')
  copy.innerHTML = script.innerHTML
  copyAttributes(script, copy)
  return copy
}

/**
 * Copy a node and take care of script nodes (see: {@link copyScript})
 */
export const copyNode = (node: Node) =>
  node instanceof HTMLScriptElement ? copyScript(node) : node.cloneNode(true)
