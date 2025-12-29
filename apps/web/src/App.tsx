import { useEffect, useState } from 'react'

type Status = 'loading' | 'success' | 'error'

interface HealthResponse {
  status: string
}

function App() {
  const [status, setStatus] = useState<Status>('loading')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const checkHealth = async () => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/health')

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`)
      }

      const data: HealthResponse = await response.json()

      if (data.status === 'ok') {
        setStatus('success')
      } else {
        throw new Error('Unexpected health status')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to connect to server'
      )
    }
  }

  useEffect(() => {
    checkHealth()
  }, [])

  return (
    <main style={styles.container}>
      {status === 'loading' && <LoadingState />}
      {status === 'success' && <SuccessState />}
      {status === 'error' && (
        <ErrorState message={errorMessage} onRetry={checkHealth} />
      )}
    </main>
  )
}

function LoadingState() {
  return (
    <div style={styles.card}>
      <div style={styles.spinner} />
      <p style={styles.text}>Checking system health...</p>
    </div>
  )
}

function SuccessState() {
  return (
    <div style={{ ...styles.card, borderColor: '#22c55e' }}>
      <div style={styles.successIcon}>✓</div>
      <h1 style={styles.title}>DelhiMart OS: OK</h1>
    </div>
  )
}

function ErrorState({
  message,
  onRetry,
}: {
  message: string
  onRetry: () => void
}) {
  return (
    <div style={{ ...styles.card, borderColor: '#ef4444' }}>
      <div style={styles.errorIcon}>!</div>
      <h1 style={styles.errorTitle}>Connection Error</h1>
      <p style={styles.errorMessage}>{message}</p>
      <button style={styles.retryButton} onClick={onRetry}>
        Retry
      </button>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '48px',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: '2px solid #e5e7eb',
    minWidth: '320px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRadius: '50%',
    margin: '0 auto 16px',
    animation: 'spin 1s linear infinite',
  },
  text: {
    color: '#6b7280',
    fontSize: '16px',
  },
  title: {
    color: '#111827',
    fontSize: '24px',
    fontWeight: 600,
    margin: 0,
  },
  successIcon: {
    width: '48px',
    height: '48px',
    background: '#22c55e',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 auto 16px',
  },
  errorIcon: {
    width: '48px',
    height: '48px',
    background: '#ef4444',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 auto 16px',
  },
  errorTitle: {
    color: '#111827',
    fontSize: '20px',
    fontWeight: 600,
    margin: '0 0 8px',
  },
  errorMessage: {
    color: '#6b7280',
    fontSize: '14px',
    marginBottom: '24px',
  },
  retryButton: {
    background: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
  },
}

// Add keyframes for spinner animation
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`
document.head.appendChild(styleSheet)

export default App
