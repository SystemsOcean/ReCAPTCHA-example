import React from 'react'

const authRoute = [
    {
        key: 'signUp',
        path: `/sign-up`,
        component: React.lazy(() => import('views/auth/SignUp')),
        authority: [],
    },
]

export default authRoute
