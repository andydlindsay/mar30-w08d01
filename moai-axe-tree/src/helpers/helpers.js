export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

// chooseRobotItem(fakeState.playerSelection, fakeState.cheating);

export const chooseRobotItem = (playerSelection, cheating) => {
  const lookup = {
    'Axe': 'Moai',
    'Tree': 'Axe',
    'Moai': 'Tree'
  };
  if (cheating) {
    return lookup[playerSelection];
  } else {
    const options = ['Moai', 'Axe', 'Tree'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
};
