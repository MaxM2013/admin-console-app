import { createSlice } from "@reduxjs/toolkit";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

// const defaultMenus = [
//   {
//       label: 'Home',
//       key: '/home',
//       iconName: 'MailOutlined',
//   },
//   {
//       label: 'About',
//       key: '/home/about',
//       iconName: 'AppstoreOutlined',
//   },
//   {
//       label: 'Redux Exam1',
//       key: '/home/exam1',
//       iconName: 'AppstoreOutlined',
//   },
//   {
//       label: 'Redux Counter',
//       key: '/home/reduxCounter',
//       iconName: 'AppstoreOutlined',
//   },
//   {
//       label: 'Posts',
//       key: '/home/posts',
//       iconName: 'AppstoreOutlined',
//   }
// ]

const defaultMenus = []

export const securitySlice = createSlice({
  name: "security",
  initialState: {
    token: '',
    menus: defaultMenus
  },
  reducers: {
    setMenus(state, action) {
      console.log('set menu: ', action.payload)
      state.menus = action.payload
    },
  },
});

export const { setMenus } = securitySlice.actions

export default securitySlice.reducer