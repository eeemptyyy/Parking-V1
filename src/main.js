import { createParkingLot } from './parkingLot';
import { initializeDragAndDrop } from './dragDrop';

document.addEventListener('DOMContentLoaded', () => {
  const parkingLotElement = document.getElementById('parking-lot');
  const parkingLot = createParkingLot(parkingLotElement);
  initializeDragAndDrop(parkingLot);
});