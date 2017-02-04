function validateAction(action, i) {
  switch(action.type) {
    case "link":
      validateLink(action);
      break;

    case "if":
      validateIf(action);
      break;

    default:
      throw "unregistered action";
  }
}

function validateLink(action) {
  if(!action.linkTo) throw "no destination!";
}

function validateIf(action) {
  
}

export default validateAction;
