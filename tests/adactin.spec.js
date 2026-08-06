import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchPage } from '../page/SearchPage'

test('Page Object Model', async ({ page }) => {
    const login =new LoginPage(page)
    await login.visitURL()
    await login.enterUserName('Harishr97')
    await login.enterPassword('200197')
    await login.ClickLogin()

    const search=new SearchPage(page)
    await search.selectLocation()
    await search.selectHotels()
    await search.selectRoom()
    await search.SelectNoRoom()
    await search.EnterCheckIn('30/07/2026')
    await search.EnterCheckOut('10/08/2026')
    await search.EnterAdultRoom()
    await search.EnterChildRoom()
    await search.ClickSearchButton()
})