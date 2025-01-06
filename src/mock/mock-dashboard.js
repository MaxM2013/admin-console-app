import mockjs from "mockjs";

const Random = mockjs.Random

const apis = [
    {
        url: '/api/v1/auth/dbd/sales',
        type: 'get',
        response: config => {
            return {
                succ: true,
                code: '',
                msg: '',
                data: [5, 20, 36, 10, 10, 20,30]
            }
        }
    }
]

export default apis