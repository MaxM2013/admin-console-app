import Mock from 'mockjs'

import securityApis from './mock-security'
import dashboardApis from './mock-dashboard'
import postsApis from './mock-posts'

const mocks = [
    ...securityApis,
    ...dashboardApis,
    ...postsApis
]

Mock.setup({
    timeout: '100-300'
})

for (const i of mocks) {
    Mock.mock(i.url, i.type, i.response)
}