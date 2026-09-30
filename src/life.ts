// Faint, slow Conway's Game of Life, used as a background texture.
const CELL = 15
const DENSITY = 0.16
const INTERVAL = 340
const EASE = 0.06
const MAX_ALPHA = 0.09
const RGB = '200, 130, 31'

export function startLife(): void {
  const canvasEl = document.getElementById('gol-bg')
  if (!(canvasEl instanceof HTMLCanvasElement)) return
  const canvas: HTMLCanvasElement = canvasEl
  const context = canvas.getContext('2d')
  if (!context) return
  const ctx: CanvasRenderingContext2D = context

  const reduce =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  let cols = 0
  let rows = 0
  let grid = new Uint8Array(0)
  let next = new Uint8Array(0)
  let field = new Float32Array(0)
  let generation = 0

  function seed(density: number): void {
    for (let i = 0; i < grid.length; i++) {
      grid[i] = Math.random() < density ? 1 : 0
    }
  }

  function resize(): void {
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    cols = Math.ceil(width / CELL) + 1
    rows = Math.ceil(height / CELL) + 1
    grid = new Uint8Array(cols * rows)
    next = new Uint8Array(cols * rows)
    field = new Float32Array(cols * rows)
    seed(DENSITY)
    if (reduce) {
      field.set(grid)
      render()
    }
  }

  function step(): void {
    let alive = 0
    for (let y = 0; y < rows; y++) {
      const yUp = ((y - 1 + rows) % rows) * cols
      const yMid = y * cols
      const yDown = ((y + 1) % rows) * cols
      for (let x = 0; x < cols; x++) {
        const xLeft = (x - 1 + cols) % cols
        const xRight = (x + 1) % cols
        const neighbors =
          grid[yUp + xLeft] +
          grid[yUp + x] +
          grid[yUp + xRight] +
          grid[yMid + xLeft] +
          grid[yMid + xRight] +
          grid[yDown + xLeft] +
          grid[yDown + x] +
          grid[yDown + xRight]
        const value =
          neighbors === 3 || (neighbors === 2 && grid[yMid + x]) ? 1 : 0
        next[yMid + x] = value
        alive += value
      }
    }
    const previous = grid
    grid = next
    next = previous
    generation += 1
    if (alive < grid.length * 0.015) {
      seed(DENSITY)
    } else if (generation % 64 === 0) {
      for (let i = 0; i < grid.length; i++) {
        if (Math.random() < 0.015) grid[i] = 1
      }
    }
  }

  function render(): void {
    const width = canvas.width / dpr
    const height = canvas.height / dpr
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = `rgb(${RGB})`
    for (let y = 0; y < rows; y++) {
      const row = y * cols
      for (let x = 0; x < cols; x++) {
        const index = row + x
        const faded = field[index] + (grid[index] - field[index]) * EASE
        field[index] = faded
        if (faded > 0.012) {
          ctx.globalAlpha = faded * MAX_ALPHA
          ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2)
        }
      }
    }
    ctx.globalAlpha = 1
  }

  let last = 0
  let running = true
  function loop(timestamp: number): void {
    if (running) {
      if (timestamp - last >= INTERVAL) {
        step()
        last = timestamp
      }
      render()
    }
    requestAnimationFrame(loop)
  }

  let resizeTimer = 0
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(resize, 200)
  })
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden
  })

  resize()
  if (!reduce) requestAnimationFrame(loop)
}
