
const getPostById = async (id: string) => {
  try {
    // Make an API call to fetch the post by its ID
    const response = await fetch(`/api/posts/${id}`);
    const data = await response.json();
    
    // Return the post data
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }
};
