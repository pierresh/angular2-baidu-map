import { Injectable } from '@angular/core'

export enum LOADING_STATE {
  NON = 0,
  LOADED = 1,
  LOADING = 2
}

window._heatmapLibLoadState = LOADING_STATE.NON
window._heatmapLoadingCallbacks = []

@Injectable()
export class HeatmapLibLoader {
  public load(cb: () => void): void {
    if (window._heatmapLibLoadState === LOADING_STATE.LOADED) {
      return cb()
    }
    if (window._heatmapLibLoadState === LOADING_STATE.LOADING) {
      window._heatmapLoadingCallbacks.push(cb)
      return
    }
    window._heatmapLibLoadState = LOADING_STATE.LOADING
    window._heatmapLoadingCallbacks.push(cb)

    const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`

    appendScriptTag(LIB_URL)
  }
}

function appendScriptTag(url: string) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onerror = () => {
    document.body.removeChild(script)

    setTimeout(() => {
      appendScriptTag(url)
    }, 30000)
  }
  script.onload = () => {
    window._heatmapLibLoadState = LOADING_STATE.LOADED
    window._heatmapLoadingCallbacks.forEach((c: () => void) => {
      c()
    })
  }
  document.body.appendChild(script)
}
