import axios from 'axios';
function Home() {
  axios
    .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
      params: {
        q: 'hoa',
        type: 'less',
      },
    })
    .then((res) => {
      console.log(res.data.data);
    })
    .catch(() => {
      console.log('catch');
    });
  return <h2>Home page</h2>;
}

export default Home;
