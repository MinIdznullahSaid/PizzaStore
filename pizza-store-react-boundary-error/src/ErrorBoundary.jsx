// import { Component } from "react";
// import { Link } from "@tanstack/react-router";

// class ErrorBoundary extends Component {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.log("Error Boundary telah menangkap error", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="error-boundary">
//           <h2>Oh no!</h2>
//           <p>
//             Terjadi error pada halaman ini! <Link to="/">Klik disini</Link>{" "}
//             untuk kembali ke beranda.
//           </p>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
import { ErrorBoundary } from "react-error-boundary";

const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div>
    <h1>Oops, ada yang salah! Error: {error.message}</h1>
    <button onClick={resetErrorBoundary}>Coba Lagi</button>
  </div>
);

const logError = (error, info) => {
  console.log("Error:", error, info);
};

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={logError}
      onReset={() => window.location.reload()} 
    >
      {children}
    </ErrorBoundary>
  );
}
