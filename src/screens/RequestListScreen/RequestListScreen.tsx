import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

interface Trainee {
  name: string;
  invited: boolean;
}

const ListOfTraineesRequests: React.FC = () => {
  const [trainees, setTrainees] = useState<Trainee[]>([
    { name: 'Jennifer James', invited: false },
    { name: 'Brian Edward', invited: false },
    { name: 'Emily Kevin', invited: false },
    { name: 'Rebecca Smith', invited: false },
    { name: 'Ronald Jason', invited: false },
    { name: 'Cristofer Arcand', invited: false },
  ]);

  const handleInvitationPress = (trainee: Trainee) => {
    setTrainees(
      trainees.map((t) =>
        t.name === trainee.name
          ? { ...t, invited: !t.invited }
          : t
      )
    );
  };

  const renderTrainee = ({ item }: { item: Trainee }) => (
    <TouchableOpacity onPress={() => handleInvitationPress(item)}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.invited ? 'Accepted' : 'rejected'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={trainees}
      renderItem={renderTrainee}
      keyExtractor={(item) => item.name}
    />
  );
};

export default ListOfTraineesRequests;
