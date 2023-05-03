import SHA from "jssha"

const CHUNK_SIZE = 5 * 1024 * 1024;

function countChunks(file: File, progressCallback?: (progress: number) => void) {
  return new Promise<string>(function (resolve, reject) {
    let offset = 0
    const sha = new SHA("SHA-512", "ARRAYBUFFER");
    const fr = new FileReader()
    fr.onload = () => {
      if (progressCallback) {
        progressCallback(offset / file.size)
      }
      // const content = fr.result as ArrayBuffer
      offset += CHUNK_SIZE
      sha.update(fr.result)
      seek()
    }
    fr.onerror = () => {
      reject(fr.error)
    }
    seek();

    function seek() {
      if (offset >= file.size) {
        if (progressCallback) {
          progressCallback(1)
        }

        resolve(sha.getHash("HEX"))
        return
      }

      const slice = file?.slice(offset, offset + CHUNK_SIZE);
      if (!slice) {
        return
      }

      fr.readAsArrayBuffer(slice);
    }
  })
}

export function setupFile(
  element: HTMLInputElement,
  status: HTMLLabelElement,
  progressElement: HTMLProgressElement,
  result: HTMLPreElement,
) {
  const onChange = (e: Event) => {
    if (!e.currentTarget) {
      return
    }

    const fileInput = e.currentTarget as HTMLInputElement

    fileInput.disabled = true
    result.innerHTML = ''
    status.style.display = ''
    progressElement.style.display = ''

    const startDate = new Date()

    if (fileInput?.files?.[0]) {
      countChunks(
        fileInput?.files?.[0],
        (progress) => {
          progressElement.value = progress * 100
          progressElement.innerHTML = `${(progress * 100).toFixed(0)}%`
        }
      )
        .then((hash) => {
          result.innerHTML = `Hash: ${hash}`
        })
        .catch((err) => {
          result.innerHTML = `Error: ${err.stack}`
        })
        .finally(() => {
          fileInput.disabled = false
          status.style.display = 'none'
          progressElement.style.display = 'none'
          result.innerHTML += `\n\nExecution time: ${(new Date().getTime() - startDate.getTime()).toLocaleString()}ms`
        })
    }

  }
  // element.addEventListener('change', onChange)
  element.addEventListener('change', onChange)
}
