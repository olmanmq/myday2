import { useRouteError } from 'react-router-dom'

export default function NotFound() {
  const error = useRouteError()

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <div className="alert alert-danger" role="alert">
            <h1 className="alert-heading">404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            {error && <p className="mb-0">Error: {error.statusText || error.message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
