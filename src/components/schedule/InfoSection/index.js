import { Button } from 'antd';
import React from 'react';
import { iconConfigs, newBoard } from '../scheduleData';

const InfoSection = ({
  setDeletedItem,
  setCurrentItem,
  setBoard,
  deletedItem,
  board,
}) => {
  const dragStartHandler = (item) => {
    setCurrentItem({
      icon: item.icon,
      id: `${Date.now()}${item.id}${Math.random() * 100}`,
    });
  };

  const deleteElementHandler = () => {
    setBoard((prev) =>
      prev.map((item) =>
        item.id === deletedItem ? { ...item, items: [] } : item
      )
    );
    setDeletedItem(null);
  };

  const deleteAll = () => {
    setBoard(newBoard);
    setDeletedItem(null);
  };

  const saveAll = () => {
    const result = JSON.stringify(board);
    alert(`Все данные сохраннены ${result}`);
  };

  return (
    <div className='modals'>
      <div className='modals-section'>
        {iconConfigs.map((item) => (
          <div key={item.id} className='icon-section'>
            <div
              draggable={true}
              onDragStart={(e) => dragStartHandler(item)}
              className='icon-section-wrapper'
            >
              <item.icon style={{ fontSize: '24px' }} />
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className='modal-action'>
        <Button onClick={saveAll} type='primary'>
          Сохранить
        </Button>
        <Button onClick={deleteAll} type='primary' danger>
          Удалить все
        </Button>
        <Button onClick={deleteElementHandler} type='primary' ghost>
          Удалить элемент
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
