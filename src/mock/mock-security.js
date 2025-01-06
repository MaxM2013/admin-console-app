import mockjs from "mockjs";

const Random = mockjs.Random;

const apis = [
  {
    url: "/api/v1/login",
    type: "post",
    response: (config) => {
      console.log("config = ", config);
      const body = JSON.parse(config.body);
      //console.log('username = ' + body.username + ', pwd = ' + body.pwd)
      if (body.username === "tom" && body.pwd === "123") {
        return {
          succ: true,
          code: "",
          msg: "",
          data: {
            token: Random.guid(32),
            expiry: 60 * 100,
          },
        };
      } else {
        return {
          succ: false,
          code: "ERR-USER-001",
          msg: "用户名密码错!",
          data: "",
        };
      }
    },
  },
  {
    url: "/api/v1/auth/userInfo",
    type: "get",
    response: (config) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: {
          name: "tom",
          menus: [
            {
              label: "Home",
              key: "/home",
              iconName: "MailOutlined",
              rkey: 'home'
            },
            {
              label: "About",
              key: "/home/about",
              iconName: "AppstoreOutlined",
              rkey: 'about'
            },
            // {
            //   label: "Redux Exam1",
            //   key: "/home/exam1",
            //   iconName: "AppstoreOutlined",
            //   rkey: 'exam1'
            // },
            // {
            //   label: "Redux Counter",
            //   key: "/home/reduxCounter",
            //   iconName: "AppstoreOutlined",
            //   rkey: 'reduxCounter'
            // },
            // {
            //   label: "Posts",
            //   key: "/home/posts",
            //   iconName: "AppstoreOutlined",
            //   rkey: 'posts'
            // },
          ],
        },
      };
    },
  },
];

export default apis;
