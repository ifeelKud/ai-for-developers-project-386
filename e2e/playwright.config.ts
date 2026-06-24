import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './',
  timeout: 30_000,
  retries: 0,
  fullyParallel: false,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: [
    {
      command: 'cd ../booking-api && npm run dev',
      port: 3000,
      timeout: 30_000,
    },
    {
      command: 'cd ../booking-ui && npm run dev',
      port: 5173,
      timeout: 30_000,
    },
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})