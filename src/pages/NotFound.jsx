const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  code: {
    fontSize: "10rem",
    fontWeight: "bold",
  },
  message: {
    fontSize: "1.5rem",
    margin: "10px 0 30px",
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
    </div>
  );
}
