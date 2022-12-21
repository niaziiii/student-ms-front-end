import axios from 'axios';
import Cookies from 'universal-cookie';

const getItems = async (str) => {
  try {
    const data = await axios({
      method: 'GET',
      url: str,
    })
    if (!data.status === 200) return;
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

const postItems = async (str, dataObj) => {
  try {
    const data = await axios({
      method: 'POST',
      url: str,
      data: dataObj
    })

    if (!data.status === 201) throw new Error(data);
    return data;
  } catch (error) {
    throw new Error(error.response);
  }
}

const loggedInChecker = async (setUser, setLoading) => {
  const cookies = new Cookies();
  const jwt = cookies.get('jwt');
  if (!jwt) setLoading(false)

  try {
    const user = await postItems(`https://student-m-s.vercel.app/api/auth/islogged`, { jwt:jwt });
    if (user.data.status === "success") {
      setLoading(false);
      setUser(user.data.data.user)
    } else {
        cookies.remove('jwt')
    }
    return user.data
  } catch (error) {
    cookies.remove('jwt')
    return
  }
}
export {
  getItems,
  postItems,
  loggedInChecker
}
