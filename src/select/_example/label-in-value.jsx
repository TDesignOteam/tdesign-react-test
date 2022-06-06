import React, { useState } from 'react';

import { Select } from 'tdesign-react';

const { Option } = Select;

const LabelInValueSelect = () => {
  const [value, setValue] = useState({ label: 'Apple', value: 'apple' });
  const onChange = (value) => {
    console.log('Value', value);
    setValue(value);
  };

  const [value2, setValue2] = useState([{ text: 'Apple', data: 'apple', type: 'fruit' }]);
  const onChange2 = (value) => {
    console.log('Value', value);
    setValue2(value);
  };

  const [value3, setValue3] = useState({ text: 'Apple', data: 'apple', type: 'fruit' });
  const onChange3 = (value) => {
    console.log('Value', value);
    setValue3(value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Select value={value} onChange={onChange} style={{ width: '40%' }} valueType="object">
        <Option key="apple" label="Apple" value="apple" />
        <Option key="orange" label="Orange" value="orange" />
        <Option key="banana" label="Banana" value="banana" />
      </Select>
      <Select
        value={value3}
        onChange={onChange3}
        valueType="object"
        style={{ width: '40%', marginLeft: '10%' }}
        keys={{ label: 'text', value: 'data' }}
        options={[
          { text: 'Apple', data: 'apple', type: 'fruit' },
          { text: 'Orange', data: 'orange', type: 'fruit' },
          { text: 'Banana', data: 'banana', type: 'fruit' },
        ]}
      />
      <Select
        value={value2}
        onChange={onChange2}
        multiple
        valueType="object"
        style={{ width: '40%', marginLeft: '10%' }}
        keys={{ label: 'text', value: 'data' }}
        options={[
          { text: 'Apple', data: 'apple', type: 'fruit' },
          { text: 'Orange', data: 'orange', type: 'fruit' },
          { text: 'Banana', data: 'banana', type: 'fruit' },
        ]}
      />
    </div>
  );
};

export default LabelInValueSelect;
