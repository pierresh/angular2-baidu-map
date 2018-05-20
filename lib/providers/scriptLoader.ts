import { Injectable } from '@angular/core'

export enum LOADING_STATE {
  NON = 0,
  LOADED = 1,
  LOADING = 2
}

export class ScriptLoaderConfig {
  public ak: string = ''
}

window._scriptLoadState = {}
window._loadingCallbacks = {}

@Injectable()
export class ScriptLoader {
  public load(url: string, isMain: boolean = false, cb: () => void): void {
    if (window._scriptLoadState[url] === LOADING_STATE.LOADED) {
      if (isMain) {
        switchDisplay('baidu-map .baidu-map-instance', 'block')
        switchDisplay('baidu-map .baidu-map-offline', 'none')
      }
      return cb()
    }
    if (!window._loadingCallbacks[url]) {
      window._loadingCallbacks[url] = []
    }
    if (window._scriptLoadState[url] === LOADING_STATE.LOADING) {
      window._loadingCallbacks[url].push(cb)
      return
    }
    window._scriptLoadState[url] = LOADING_STATE.LOADING
    window._loadingCallbacks[url].push(cb)

    if (isMain) {
      window.baidumapinit = () => {
        window._scriptLoadState[url] = LOADING_STATE.LOADED
        switchDisplay('baidu-map .baidu-map-instance', 'block')
        switchDisplay('baidu-map .baidu-map-offline', 'none')
        window._loadingCallbacks[url].forEach((c: () => void) => {
          c()
        })
      }
    }
    appendScriptTag(url, isMain)
  }
}

function appendScriptTag(url: string, isMain: boolean) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onerror = () => {
    if (isMain) {
      switchDisplay('baidu-map .baidu-map-offline', 'block')
      switchDisplay('baidu-map .baidu-map-instance', 'none')
    }
    document.body.removeChild(script)

    setTimeout(() => {
      appendScriptTag(url, isMain)
    }, 30000)
  }

  if (!isMain) {
    script.onload = () => {
      window._scriptLoadState[url] = LOADING_STATE.LOADED
      window._loadingCallbacks[url].forEach((c: () => void) => {
        c()
      })
    }
  }
  document.body.appendChild(script)
}

function switchDisplay(selector: string, state: string) {
  Array.prototype.slice.call(document.querySelectorAll(selector)).forEach((node: HTMLElement) => {
    node.style.display = state
  })
}
