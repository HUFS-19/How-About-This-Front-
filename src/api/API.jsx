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
  getProd: (prodId) => {
    return API.get(`productAPI/${prodId}`);
  },
  getUserProd: (userId) => {
    return API.get(`productAPI/user/${userId}`);
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
  getLike: () => {
    return API.get('productAPI/like');
  },
  likeCheck: (prodID) => {
    return API.get(`productAPI/${prodID}/likeCheck`);
  },
  getChatRoom: (prodId, inquirerId) => {
    return API.get(`productAPI/${prodId}/chat/${inquirerId}`);
  },
};

export const prodEditApi = {
  addLike: (prodId) => {
    return API.get(`productAPI/${prodId}/like`);
  },
  deleteLike: (prodId) => {
    return API.delete(`productAPI/${prodId}/like`);
  },
  createChatRoom: (prodId, inquirerId) => {
    return API.post(`productAPI/${prodId}/chat/${inquirerId}`);
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

export const commentApi = {
  getComments: (prodId) => {
    return API.get(`commentAPI/${prodId}`);
  },
  postComment: (prodId, userId, content) => {
    return API.post(`commentAPI/${prodId}`, {
      userID: userId,
      content: content,
    });
  },
  deleteComments: (commentId) => {
    return API.delete(`commentAPI/${commentId}`);
  },
};

export const messageApi = {
  getLastMsg: (roomId) => {
    return API.get(`messageAPI/chatroom/${roomId}/lastMessage`);
  },
  getMsgAll: (chatroomId) => {
    return API.get(`messageAPI/chatroom/${chatroomId}`);
  },
  pushMsg: (msgData) => {
    return API.post('messageAPI', msgData);
  },
};

export const changePwApi = {
  changePw: (userId, inputs) => {
    return API.put(`changePasswordAPI/${userId}`, { inputs });
  },
};
