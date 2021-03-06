import React from 'react';
import { Tree } from 'tdesign-react';

const items = [
  {
    label: '1',
    children: true,
  },
  {
    label: '2',
    children: true,
  },
];

export default () => {
  const load = (node) =>
    new Promise((resolve) => {
      setTimeout(() => {
        let nodes = [];
        if (node.level < 2) {
          nodes = [
            {
              label: `${node.label}.1`,
              children: true,
            },
            {
              label: `${node.label}.2`,
              children: true,
            },
          ];
        }
        resolve(nodes);
      }, 1000);
    });

  const handleLoad = (state) => {
    console.log('on load:', state);
  };

  return (
    <div className="tdesign-tree-base">
      <Tree data={items} hover expandAll load={load} onLoad={handleLoad} />
    </div>
  );
};
