import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TopicContext } from './TopicsContext';

function Title() {
  const { topics } = useContext(TopicContext);
  const styles={
    ul:{
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      justifyContent:"flex-start",
      alignItems:"flex-start"
    }
  }
  return (
    <div>
      <h2>React Tutorial</h2>
      <ul style={styles.ul}>
        {topics.length > 0 ? (
          topics.map((topic) => (
            <li key={topic.id}>
              <Link to={`/layout/services/content/${topic.id}`}>{topic.title}</Link>
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default Title;
