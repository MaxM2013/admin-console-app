import instance from "../utils/ApiRequest";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, endLoading } from "../store/slice/systemSlice";

// 提交 token 用于用户跟踪
instance.interceptors.request.use((config) => {
    // config.headers['Authorization'] = token
    console.log('interceptor.1.token = ', token)
    if (token !== '') {
        config.headers['Authorization'] = token
    }
     console.log('interceptor.1 = ')
     return config
 }, (error) => {
     // 对响应错误进行处理
     return Promise.reject(error);
 })

//  instance.interceptors.request.use((config) => {
//      console.log('interceptor.2 = ')
//      return config
//  }, (error) => {
//      // 对响应错误进行处理
//      return Promise.reject(error);
//  })

let authInterceptorLoaded = false
let token = ''

export const setTokenForHttp = (newToken) => {
    token = newToken
}

const useHttp = () => {

  const dispatch = useDispatch();

//   if (!authInterceptorLoaded) {
//     authInterceptorLoaded = true
//     instance.interceptors.request.use((config) => {
//         console.log('interceptor.1.token = ', token)
//         if (token !== '') {
//             config.headers['Authorization'] = token
//         }
//          console.log('interceptor.1 = ')
//          return config
//      }, (error) => {
//          // 对响应错误进行处理
//          return Promise.reject(error);
//      })
//   }

  const request = (url, method, headers, data) => {
    let paramsName = "data";
    if (method === "get") {
      paramsName = "params";
    }
    return new Promise((resolve, reject) => {
      dispatch(startLoading());
      instance
        .request({
          method: method,
          url: url,
          headers: headers,
          [paramsName]: data,
        })
        .then((res) => {
          if (res.data.succ) {
            resolve(res.data.data);
          } else {
            reject({ code: res.data.code, message: res.data.msg });
          }
        })
        .catch((err) => {
          reject({ code: "ERR-00000", message: "网络错误!" });
        })
        .finally(() => {
          dispatch(endLoading());
        });
    });
  };

  const post = (url, headers, data) => {
    return request(url, "post", headers, data);
  };

  const get = (url, headers, data) => {
    return request(url, "get", headers, data);
  };

  return {
    post,
    get,
  };
};

export default useHttp;
