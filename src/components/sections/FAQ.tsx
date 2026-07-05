export function FAQ() {
  const items = [
    ["Necesito saber tecnologia?", "No. Tu nos pasas tu carta y nosotros la montamos. Luego puedes pedir cambios o editarlos desde el panel."],
    ["En cuanto tiempo esta lista?", "Normalmente en 24 a 48 horas desde que recibimos carta, logo y datos principales."],
    ["SIMI reemplaza mi WhatsApp?", "No. SIMI ordena el pedido antes de llegar a WhatsApp para que el cliente no escriba todo a mano."],
    ["Hay permanencia?", "No. Puedes cancelar cuando quieras."]
  ];

  return (
    <section className="section-shell py-14">
      <h2 className="text-4xl font-medium tracking-[-0.02em]">Preguntas frecuentes</h2>
      <div className="mt-6 grid gap-3">
        {items.map(([question, answer]) => (
          <details key={question} className="rounded-[24px] border border-border bg-card p-5 shadow-soft">
            <summary className="cursor-pointer text-lg font-medium">{question}</summary>
            <p className="mt-3 text-sm leading-6 text-foreground/62">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
