import data from "../data/dokumen.json";

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>📚 Arsip Dokumen</h1>
      <p>Kumpulan dokumen agar mudah dicari</p>

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 16,
            marginBottom: 12,
            borderRadius: 8
          }}
        >
          <h3>{item.judul}</h3>
          <p><b>Kategori:</b> {item.kategori}</p>
          <p>{item.deskripsi}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            🔗 Buka Dokumen
          </a>
        </div>
      ))}
    </main>
  );
}
