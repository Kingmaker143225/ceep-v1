


export default function SectionTitle({ title, centered = false }) {
  return (
    <div
      className={`mb-8 ${
        centered ? "text-center flex flex-col items-center" : ""
      }`}
    >
      <h2
        className="text-3xl md:text-4xl leading-tight"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "700",
          letterSpacing: "0px",
          lineHeight: "1.2",
          color: "#06254D",
        }}
      >
        {title}
      </h2>

      <div
        className={`h-1 w-16 bg-secondary mt-3 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}



