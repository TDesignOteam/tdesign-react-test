import React, { useState } from 'react';
import { Drawer, Button } from 'tdesign-react';

export default function () {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button theme="primary" onClick={handleClick}>
        打开抽屉
      </Button>
      <Drawer header="抽屉标题" visible={visible} onClose={handleClose} showOverlay={false}>
        <p>抽屉的内容</p>
      </Drawer>
    </div>
  );
}
