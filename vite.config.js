import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [
    react(),
    ssr(),
    {
      name: 'log-dom-mount-time',
      apply: 'serve',
      transformIndexHtml(_, { server }) {
        if (!global.__vite_dom_mounted) {
          const info = server.config.logger.info

          const viteStartTime = global.__vite_server_start_time || false
          const startupDurationString = viteStartTime ? `DOM ready in ${(Number(Math.ceil(performance.now() - viteStartTime)) / 1000).toFixed(2)} s` : ''

          info(`\n🍃 ${startupDurationString}\n`)
          global.__vite_dom_mounted = true
        }
      },
    },
  ],
}
