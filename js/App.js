export default class App {
  static canvas = document.querySelector('canvas')
  static ctx = App.canvas.getContext('2d')
  static dpr = devicePixelRatio > 1 ? 2 : 1
  static interval = 1000 /60
  static width = 1024
  static height = 768

  constructor() {
    window.addEventListener('resize', this.resize.bind(this))
  }

resize() {
  App.canvas.width = App.width * App.dpr
  App.canvas.height = App.height * App.dpr
  App.ctx.scale(App.dpr, App.dpr)

  const width = innerWidth > innerHeight ? innerHeight * 0.9 : innerWidth * 0.9
  App.canvas.style.width = width + 'px'
  App.canvas.style.height = width * (3 / 4) + 'px'
  }

}