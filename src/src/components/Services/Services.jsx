import React from 'react';
import Title from '../../pages/react/Title';
import { TopicProvider } from '../../pages/react/TopicsContext'; 

function Services() {
  return (
    <TopicProvider> 
      <Title />
    </TopicProvider>
  );
}

export default Services;
