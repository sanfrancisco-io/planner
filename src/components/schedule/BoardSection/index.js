import React, { useState } from 'react';

const BoardSection = ({
  board: boards,
  setBoard,
  currentItem,
  setCurrentItem,
  deletedItem,
  setDeletedItem,
}) => {
  const [coordinates, setCoordinates] = useState(null);

  const dragStartHandler = (board) => {
    setCoordinates(board);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'board-wrapper-playground-child') {
      e.target.style.boxShadow = '5px 5px 5px 5px gray';
    }
  };

  const dropHandler = (e, board) => {
    e.target.style.boxShadow = 'none';
    const currentIndex = board.items.indexOf(currentItem);
    coordinates?.items?.splice(currentIndex, 1);
    setBoard((prev) =>
      prev.map((item) =>
        item.id === board.id ? { ...item, items: [{ ...currentItem }] } : item
      )
    );
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const reSelect = (item, deletedId) => {
    setCurrentItem(item);
  };

  return (
    <div className='board-wrapper'>
      <div className='board-header'>
        <span>Карта комнаты</span>
      </div>
      <div className='board-wrapper-playground'>
        {boards.map((board) => (
          <div
            key={board.id}
            onDragStart={() => dragStartHandler(board)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, board)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onClick={() => setDeletedItem(board.id)}
            className='board-wrapper-playground-child'
            style={
              deletedItem === board.id ? { boxShadow: '0 0 10px black' } : {}
            }
          >
            {board?.items?.map((item) => (
              <div
                onClick={() => reSelect(item, board.id)}
                draggable={true}
                className='board-icons'
                key={item.id}
              >
                <item.icon style={{ fontSize: '24px' }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardSection;
