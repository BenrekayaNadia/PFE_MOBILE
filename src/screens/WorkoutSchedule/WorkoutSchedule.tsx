import React from 'react';
import { ListItem, Avatar, Icon, Text } from 'react-native-elements';

interface WorkoutScheduleProps {
  workout: {
    name: string;
    time: string;
  }[];
}

const WorkoutSchedule: React.FC<WorkoutScheduleProps> = ({ workout }) => {
  return (
    <>
      {workout.map((item, index) => (
        <ListItem key={index} bottomDivider>
          <Avatar />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon type="ionicon" name="chevron-forward-outline" />
        </ListItem>
      ))}
    </>
  );
};

export default WorkoutSchedule;
