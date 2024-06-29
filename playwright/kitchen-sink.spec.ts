import { test, expect } from "@playwright/test"

test.describe(`Kitchen Sink`, () => {
  test(`should build and serve index page`, async ({ page }) => {
    await page.goto(`/`)

    await expect(page).toHaveTitle(`@alexjorgef/gatsby-source-bandcamp`)
  })
  test(`contains elements`, async ({ page }) => {
    await page.goto(`/`)

    await expect(await page.locator(`h1:has-text("@alexjorgef/gatsby-source-bandcamp")`)).toBeVisible()
    // await expect(await page.locator(`text=alexjorgef`)).toBeVisible()
    await expect(await page.locator(`h2`, { hasText: `Spiritual HealingSpiritual Healing` })).toBeVisible()
    await expect(await page.locator(`text=Artist: by The Muses Raptby The Muses Rapt`).first()).toBeVisible()
    await expect(await page.locator(`h2`, { hasText: `Balsame Remixes, Pt. 2Balsame Remixes, Pt. 2` })).toBeVisible()
    await expect(await page.locator(`text=Artist: by Xinobiby Xinobi`).first()).toBeVisible()
    await expect(await page.locator(`h2`, { hasText: `'Voyager' LP'Voyager' LP` })).toBeVisible()
    await expect(await page.locator(`text=Artist: by Mirror Peopleby Mirror People`).first()).toBeVisible()
    await expect(await page.locator(`text=Demo of @alexjorgef/gatsby-source-bandcamp – GitHub – Website`)).toBeVisible()
  })
})
