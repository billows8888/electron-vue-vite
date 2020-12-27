/**
 * electron 主文件
 */
import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import dotenv from 'dotenv'

const isdev = !app.isPackaged
dotenv.config({ path: join(__dirname, '../../.env') })

let win: BrowserWindow

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow(Object.assign({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      preload: join(__dirname, '../preload/index.js'),
    },
  }, isdev
    ? { // 开发环境配置
      x: 0,
      y: 0,
    }
    : { // 生产环境配置

    }))

  const URL = isdev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址

  isdev && win.webContents.openDevTools() // 开发模式下自动打开 DevTools

  win?.loadURL(URL)
}

app.whenReady().then(createWin)
