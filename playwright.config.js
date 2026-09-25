import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',use:{baseURL:'http://127.0.0.1:5182/dovac-2.0/',browserName:'chromium',channel:'msedge',viewport:{width:1440,height:1000}},webServer:{command:'npm run dev -- --port 5182 --strictPort',url:'http://127.0.0.1:5182/dovac-2.0/',reuseExistingServer:true},reporter:'list'});
