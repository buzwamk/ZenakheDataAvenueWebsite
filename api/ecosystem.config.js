module.exports = {
  apps: [
    {
      name:         'zenakhe-api',
      script:       'server.js',
      instances:    2,              // 2 processes on the 2-core CCX13
      exec_mode:    'cluster',
      watch:        false,
      max_memory_restart: '400M',
      env_production: {
        NODE_ENV: 'production',
        PORT:     3000
      },
      error_file:   '/var/log/zenakhe-api/error.log',
      out_file:     '/var/log/zenakhe-api/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      restart_delay: 3000,
      max_restarts:  10
    }
  ]
};
