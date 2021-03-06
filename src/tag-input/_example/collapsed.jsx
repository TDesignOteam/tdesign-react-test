import React, { useState } from 'react';
import { TagInput, Popup, Tag } from 'tdesign-react';

export default function TagInputCollapsedExample() {
  const [tags, setTags] = useState(['Vue', 'React', 'Miniprogram', 'Angular', 'Flutter']);
  const renderCollapsedItems = ({ collapsedTags }) => (
    <Popup
      key={'tags'}
      content={collapsedTags.map(item => (
        <Tag key={item} style={{ marginRight: '4px' }}>{item}</Tag>
      ))}
    >
      <Tag>More({ collapsedTags?.length })</Tag>
    </Popup>
  );
  return (
    <div className="tdesign-demo-block-column" style={{ width: '80%' }}>
      <TagInput value={tags} onChange={setTags} minCollapsedNum={1} />
      <TagInput
        value={tags}
        onChange={setTags}
        minCollapsedNum={3}
        collapsedItems={renderCollapsedItems}
      ></TagInput>
    </div>
  );
}
