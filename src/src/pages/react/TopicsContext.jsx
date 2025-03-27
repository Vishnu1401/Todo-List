import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/React.json");
        setTopics(response.data.topics);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TopicContext.Provider value={{ topics }}>
      {children}
    </TopicContext.Provider>
  );
};
