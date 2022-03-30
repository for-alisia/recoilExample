import { useState } from 'react';
import { Card, Button, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { goalItem } from '../goals.atoms';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';

const getIcon = (isEditMode) => (isEditMode ? <CheckOutlined /> : <EditOutlined />);

const GoalItem = ({ goalId }) => {
  // Recoil state from familyAtom (here we got atom by id)
  const [{ description, title }, setItem] = useRecoilState(goalItem(goalId));

  // Usual React state
  const [isEditMode, setIsEditMode] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const modeChangeHandler = () => {
    if (isEditMode) {
      // Set new values for atom
      setItem((oldItem) => ({ ...oldItem, title: titleInput, description: descriptionInput }));
    }
    setIsEditMode((prev) => !prev);
  };

  // Input handlers
  const titleChangeHandler = ({ target: { value } }) => {
    setTitleInput(value);
  };

  const descriptionChangeHandler = ({ target: { value } }) => {
    setDescriptionInput(value);
  };

  return (
    <Card
      title={isEditMode ? <Input value={titleInput} onChange={titleChangeHandler} /> : title}
      extra={<Button shape="circle" icon={getIcon(isEditMode)} onClick={modeChangeHandler} />}
      style={{ width: 320 }}
    >
      <p>
        {isEditMode ? (
          <Input value={descriptionInput} onChange={descriptionChangeHandler} />
        ) : (
          description
        )}
      </p>
    </Card>
  );
};

export default GoalItem;
