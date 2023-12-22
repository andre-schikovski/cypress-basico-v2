import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
