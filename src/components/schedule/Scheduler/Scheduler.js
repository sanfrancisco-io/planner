import React, { useState } from 'react';

import { Card } from 'antd';
import InfoSection from '../InfoSection';
import BoardSection from '../BoardSection';
import { newBoard } from '../scheduleData';

const Scheduler = () => {
  const [board, setBoard] = useState(newBoard);
  const [currentItem, setCurrentItem] = useState(null);
  const [deletedItem, setDeletedItem] = useState(null);

  return (
    <Card>
      <div className='drag-wrapper'>
        <InfoSection
          setCurrentItem={setCurrentItem}
          currentItem={currentItem}
          board={board}
          setBoard={setBoard}
          deletedItem={deletedItem}
          setDeletedItem={setDeletedItem}
        />
        <BoardSection
          deletedItem={deletedItem}
          setDeletedItem={setDeletedItem}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          setBoard={setBoard}
          board={board}
        />
      </div>
    </Card>
  );
};

export default Scheduler;
