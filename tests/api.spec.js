import { test, request } from '@playwright/test'
import PostData from '../data/post.json'
import TokenData from '../data/token.json'
import PutData from '../data/put.json'

var BearerToken = ""
var B_id=""

test.describe.serial('API', async () => {
    test('Get Booking ID', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking')
        const body = await response.json()
        console.log('Get Booking ID',body)
    })
    test('Get Booking Details', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking/4')
        const body = await response.json()
        console.log('Get Booking Details',body)
    })
    test('Create Booking Details', async ({ request }) => {
        const response = await request.post('https://restful-booker.herokuapp.com/booking', {
            data: PostData
        })
        const body = await response.json()
        B_id=body.bookingid
        console.log("Booking ID",B_id)
        console.log('Create Booking Details',body)
    })

    test('Create Token', async ({ request }) => {
        const response = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: {
                "Content-Type": "application/json"
            },
            data: TokenData
        })
        const body=await response.json()
        BearerToken = body.token
        console.log("Token ID:",BearerToken)
        console.log('Create Token',body)
    })
    test('Update Booking Details', async ({ request }) => {
        const response = await request.put(`https://restful-booker.herokuapp.com/booking/${B_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Cookie": `token=${BearerToken}`
            },
            data: PutData
        })
        const body = await response.json()
        console.log('Update Booking Details',body)
        const status = await response.status()
        console.log("Status Code for Update Booking Details:", status)
    })
})