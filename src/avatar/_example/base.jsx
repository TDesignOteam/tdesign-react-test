import React from 'react';
import { Avatar } from 'tdesign-react';
import { UserIcon } from 'tdesign-icons-react';

export default function BasicAvatar() {
  return (
    <div className="demo-avatar">
      <Avatar
        image="https://tdesign.gtimg.com/site/avatar.jpg"
        hideOnLoadFailed="false"
        style={{ marginRight: '40px' }}
      ></Avatar>
      <Avatar style={{ marginRight: '40px' }}>W</Avatar>
      <Avatar icon={<UserIcon />} style={{ marginRight: '40px' }}></Avatar>
      <Avatar style={{ marginRight: '40px' }}>
        <UserIcon />
      </Avatar>
    </div>
  );
}
