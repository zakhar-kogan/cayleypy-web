import { useState } from 'preact/hooks'

type CopyCommandProps = {
  command: string
}

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setFailed(false)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setFailed(true)
      window.setTimeout(() => setFailed(false), 1600)
    }
  }

  return (
    <div class="copy-command">
      <code>{command}</code>
      <button
        class="copy-command__button"
        type="button"
        onClick={copyCommand}
        aria-label={
          failed ? `Copy failed: ${command}` : copied ? `Copied command: ${command}` : `Copy command: ${command}`
        }
        title={failed ? 'Copy failed' : copied ? 'Copied' : 'Copy'}
      >
        <span aria-hidden="true">{failed ? '!' : copied ? '✓' : '⧉'}</span>
      </button>
    </div>
  )
}
