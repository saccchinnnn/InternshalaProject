import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';

const PostList = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Posts
      </Typography>
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id} divider>
            <ListItemText
              primary={post.title}
              secondary={post.body}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;