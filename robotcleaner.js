var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);
var numOfCommands = 0;
var lineNumber = 0;
var currentXPos = 0;
var currentYPos = 0;
var cleanedCoordiates = [];
prompts.on("line", readLine);

function readLine(line) {
  if (lineNumber == 0) {
    numOfCommands = parseInt(line);
  }
  if (lineNumber == 1) {
    const [xCord, yCord] = line.split(" ");
    currentXPos = parseInt(xCord);
    currentYPos = parseInt(yCord);
    cleanedCoordiates.push({ x: currentXPos, y: currentYPos });
  }

  if (lineNumber > 1) {
    if (lineNumber == numOfCommands + 1) {
      clean(line);
      console.log("=> Cleaned: " + cleanedCoordiates.length);
      console.log(cleanedCoordiates);

      process.exit();
    }

    clean(line);
  }
  lineNumber++;
}

function clean(line) {
  const [direction, nos] = line.split(" ");

  switch (direction) {
    case "E":
      cleanInEastDirection(nos);
      break;

    case "W":
      cleanInWestDirection(nos);
      break;

    case "N":
      cleanInNorthDirection(nos);
      break;

    case "S":
      cleanInSouthDirection(nos);
      break;
  }
}

function cleanInEastDirection(nos) {
  for (z = 0; z < nos; z++) {
    if (currentXPos + 1 <= 10000) {
      currentXPos = currentXPos + 1;

      const result = cleanedCoordiates.filter(
        cleanedCoordiate =>
          cleanedCoordiate.x == currentXPos && cleanedCoordiate.y == currentYPos
      );
      if (result.length == 0) {
        cleanedCoordiates.push({ x: currentXPos, y: currentYPos });
      }
    }
  }
}

function cleanInWestDirection(nos) {
  for (z = 0; z < nos; z++) {
    if (currentXPos - 1 >= -10000) {
      currentXPos = currentXPos - 1;

      const result = cleanedCoordiates.filter(
        cleanedCoordiate =>
          cleanedCoordiate.x == currentXPos && cleanedCoordiate.y == currentYPos
      );
      if (result.length == 0) {
        cleanedCoordiates.push({ x: currentXPos, y: currentYPos });
      }
    }
  }
}

function cleanInNorthDirection(nos) {
  for (z = 0; z < nos; z++) {
    if (currentYPos + 1 <= 10000) {
      currentYPos = currentYPos + 1;
      const result = cleanedCoordiates.filter(
        cleanedCoordiate =>
          cleanedCoordiate.x == currentXPos && cleanedCoordiate.y == currentYPos
      );
      if (result.length == 0) {
        cleanedCoordiates.push({ x: currentXPos, y: currentYPos });
      }
    }
  }
}

function cleanInSouthDirection(nos) {
  for (z = 0; z < nos; z++) {
    if (currentYPos - 1 >= -10000) {
      currentYPos = currentYPos - 1;
      const result = cleanedCoordiates.filter(
        cleanedCoordiate =>
          cleanedCoordiate.x == currentXPos && cleanedCoordiate.y == currentYPos
      );
      if (result.length == 0) {
        cleanedCoordiates.push({ x: currentXPos, y: currentYPos });
      }
    }
  }
}
