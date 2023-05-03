import './style.css'
import { setupFile } from './file.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>File Hash</h1>
    <input id="file" type="file" />
    <div>
      <label id="status" for="progress" style="display: none">Hashing...</label>
      <progress id="progress" value="0" max="100" style="display: none"></progress>
      <pre id="result"></pre>
    </div>
  </div>
`

setupFile(
  document.querySelector<HTMLInputElement>('#file')!,
  document.querySelector<HTMLLabelElement>('#status')!,
  document.querySelector<HTMLProgressElement>('#progress')!,
  document.querySelector<HTMLPreElement>('#result')!,
)
