module.exports = function check(str, bracketsConfig) {
  // создаем новый стек newStack 
  // обЪект bracketsPairs, который хранит значения в виде: ключ -закрывающая скобка, значение -открывающая скобка
  // обЪект equalBracketsPairs, который хранит значения, когда ключ и значения совпадают
  let newStack = []
  let bracketsPairs = bracketsConfig.reduce(((acc, el) => acc = { ...acc, [el[1]]: el[0]} ), {})
  let equalBracketsPairs = bracketsConfig.reduce(((acc, el) => (el[1] === el[0]) ? acc = { ...acc, [el[1]]: el[0]} : acc), {}) 

  for (let i = 0; i < str.length; i++){
    // проверка если рядом идут скобки, в которых открывающая и закрывающая скобка равны
    if (newStack[newStack.length - 1] === equalBracketsPairs[str[i]] && str[i] === equalBracketsPairs[str[i]]) { 
      newStack.pop()
    // добавляем любую открывающую скобку в стек
    }else if (Object.values(bracketsPairs).includes(str[i])){
      newStack.push(str[i])
    } else {
      // проверка если в стеке нет открывающей скобки, а сейчас идет закрывающая
      if (newStack.length === 0) {
        return false
      }

      // удаляем элемент, если в стеке последняя это открывающая скобка, а сейчас элемент - закрывающая скобка
      if (newStack[newStack.length - 1] === bracketsPairs[str[i]]) {
        newStack.pop()
      } else {
        return false
      }
    } 
  }
  return newStack.length === 0
}