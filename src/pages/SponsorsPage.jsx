import Sponsors from "../components/Sponsors";

export default function SponsorsPage() {
  return (
    <section>
      <Sponsors />
      <div
        style={{
          maxWidth: "700px",
          margin: "3rem auto",
          padding: "0 1rem",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Become a Sponsor</h2>
        <p>
          Sponsoring FLoC 2026 is a meaningful way to support the global logic and verification
          communities. Your contribution helps us lower registration fees for students and
          early-career researchers, making it easier for the next generation of scholars to
          participate and contribute.
        </p>
        <p>
          To learn more about sponsorship opportunities and benefits, please see our{" "}
          <a
            href="/sponsors/FLoC2026_sponsors_brochure.pdf"
            style={{ color: "#0066cc", textDecoration: "underline" }}
          >
            sponsorship brochure (PDF)
          </a>
          . For further information or to discuss sponsorship options, please contact us at{" "}
          <a
            href="mailto:sponsors@floc2026.org"
            style={{ color: "#0066cc", textDecoration: "underline" }}
          >
            sponsors@floc2026.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}
