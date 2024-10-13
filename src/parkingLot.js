const COLS = 100;

export function createParkingLot(container) {
  const parkingSpaces = [];

  const rowElement = document.createElement('div');
  rowElement.className = 'parking-row';
  
  for (let i = 0; i < COLS; i++) {
    const space = document.createElement('div');
    space.className = 'parking-space';
    space.dataset.id = i;

    const spaceNumber = document.createElement('div');
    spaceNumber.className = 'parking-space-number';
    spaceNumber.textContent = i + 1;
    space.appendChild(spaceNumber);

    rowElement.appendChild(space);
    parkingSpaces.push(space);
  }

  container.appendChild(rowElement);

  // Add some initial trailers
  addTrailer(parkingSpaces[0], 'LANE');
  addTrailer(parkingSpaces[5], 'DNVT');
  addTrailer(parkingSpaces[20], 'NOAH');
  addTrailer(parkingSpaces[50], 'LMTV');
  addTrailer(parkingSpaces[75], 'LMTV');
  addTrailer(parkingSpaces[99], 'LMTV');

  return parkingSpaces;
}

function addTrailer(space, name) {
  const trailer = document.createElement('div');
  trailer.className = `trailer ${name}`;
  
  const trailerType = document.createElement('div');
  trailerType.className = 'trailer-type';
  trailerType.textContent = name;
  
  trailer.appendChild(trailerType);
  trailer.draggable = true;
  space.appendChild(trailer);
  space.classList.add('occupied');
}