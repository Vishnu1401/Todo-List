import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TopicContext } from './TopicsContext';
import { Link } from 'react-router-dom';

function Content() {
  const { id } = useParams();
  const { topics } = useContext(TopicContext);
  const styles={
    sidebar:  {
        width: '200px', 
        padding: '10px', 
        borderRight: '1px solid gray',
        background:"#213547",
        color:"white",
        overflowY:"auto",
        height:"95%",
        marginBottom: "5px" 
    },
    ul:{
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      justifyContent:"flex-start",
      alignItems:"flex-start"
    },
    li:{
        color:"white"
    }
  }
  const topic = topics.find((t) => t.id === parseInt(id));
  console.log(topic)

  if (!topic) {
    return <div>Loading...</div>;
  }
   
  return (
    <div style={{ display: 'flex' ,height:"100vh"}}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>Topics</h3>
        <ul style={styles.ul}>
          {topics.map((t) => (
            <li  key={t.id}>
              <Link style={styles.li} to={`/layout/services/content/${t.id}`}>{t.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px',marginLeft:"20px", overflow:"auto"}}>
      {topic ? (
                <>
                    <h2 style={{ color: "red", margin: "20px 0px" }}>{topic.title}</h2>

                    {/* Display Content */}
                    {topic.content && topic.content.length > 0 ? (
                        topic.content.map((con, i) => (
                            <p key={i} style={{ margin: "10px" }}>{con}</p>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                    {/* {Display Image} */}
                    {
                        topic.image && (
                            <div>
                                <img style={{width:"500px" , height:"400px"}} src={topic.image} alt="Image Loading"/>
                            </div>
                        )
                    }

                    {/* Display Example */}
                    {topic.example && (
                        <div>
                            <h3 style={{ marginBottom: "5px" }}>Example:</h3>
                            <p>{topic.example.description}</p>
                            <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                                <code>{topic.example.code}</code>
                            </pre>
                        </div>
                    )}

                    {/* Displaying COmparision */}

                    {
                      topic.comparison && (
                        <div>
              <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                   <tr>
                      {Object.keys(topic.comparison.table[0]).map((header, index) => (
                    <th key={index}>{header}</th>
                      ))}
                  </tr>
                </thead>
               <tbody>
                  {topic.comparison.table.map((row, index) => (
                   <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td key={i}>{value}</td>
                     ))}
                   </tr>
                  ))}
                   </tbody>
                </table>
                        </div>
                      )
                    }
                </>
            ) : (
                <div>Loading...</div>
            )}
      </div>
    </div>
  );
}

export default Content;
