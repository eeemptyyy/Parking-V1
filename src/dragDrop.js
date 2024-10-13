export function initializeDragAndDrop(parkingSpaces) {
  parkingSpaces.forEach(space => {
    space.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    space.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedTrailer = document.querySelector('.trailer.dragging');
      if (draggedTrailer && !space.classList.contains('occupied')) {
        space.appendChild(draggedTrailer);
        space.classList.add('occupied');
        draggedTrailer.parentElement.classList.remove('occupied');
      }
    });
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('trailer')) {
      e.target.classList.add('dragging');
    }
  });

  document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('trailer')) {
      e.target.classList.remove('dragging');
    }
  });
}