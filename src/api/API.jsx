import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const userApi = {
  login: (id, pw) => {
    return API.post('userAPI/login', { id: id, password: pw });
  },
  logout: () => {
    return API.get('userAPI/logout');
  },

  join: (id, pw) => {
    return API.post('userAPI/join', {
      id: id,
      password: pw,
    });
  },
  idCheck: (id) => {
    return API.post('userAPI/join/idCheck', { id: id });
  },

  checkLogin: () => {
    return API.get('userAPI/checkLogin');
  },
  //로그인여부, 닉네임, 아이콘, 아이디 return
  getUser: () => {
    return API.get('userAPI/nav');
  },
};

export const ProdInfoApi = {
  getLike: () => {
    return API.get('productAPI/like');
  },
  search: (cate, type, search) => {
    return API.post('productAPI/search', {
      category: cate,
      type: type,
      search: search,
    });
  },
  getCateProds: (cateId, sortMethod) => {
    return API.post('productAPI/list', { category: cateId, sort: sortMethod });
  },
  getProdImgs: (prodID) => {
    return API.get(`productAPI/${prodID}/imgs`);
  },
  likeCheck: (prodID) => {
    return API.get(`${prodID}/likeCheck`);
  },
};

export const prodEditApi = {
  addLike: (prodId) => {
    return API.get(`productAPI/${prodId}/like`);
  },
  deleteLike: (prodId) => {
    return API.delete(`productAPI/${prodId}/like`);
  },
};

export const categoryApi = {
  getCateName: (cateNum) => {
    return API.get(`categoryAPI/${cateNum}`);
  },

  getAllCateName: () => {
    return API.get(`categoryAPI/all`);
  },
};
