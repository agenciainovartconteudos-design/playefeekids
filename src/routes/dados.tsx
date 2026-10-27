import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import rawConfig from "@/atlas/configs/leadgen.json";
import type { TemplateConfig } from "@/atlas/types";
import { downloadText } from "@/atlas/shared/ui";

const config = rawConfig as unknown as TemplateConfig;

export const Route = createFileRoute("/dados")({
  head: () => ({
    meta: [
      { title: "Baixar dados em JSON — Play e Fé Kids" },
      {
        name: "description",
        content: "Baixe o arquivo JSON com os dados da página Play e Fé Kids.",
      },
    ],
  }),
  component: DadosPage,
});

function DadosPage() {
  const json = JSON.stringify(config, null, 2);

  const baixar = () =>
    downloadText(
      "play-e-fe-kids-dados.json",
      json,
      "application/json;charset=utf-8",
    );

  useEffect(() => {
    baixar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        maxWidth: 820,
        margin: "60px auto",
        padding: "0 20px 80px",
        fontFamily: "Manrope, Arial, sans-serif",
        color: "#1a1a1a",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 12, letterSpacing: "-0.02em" }}>
        Seu arquivo JSON está sendo baixado
      </h1>
      <p style={{ color: "#555", marginBottom: 24, lineHeight: 1.7 }}>
        O download de <strong>play-e-fe-kids-dados.json</strong> deve começar
        automaticamente. Se não começar (por bloqueio de pop-up), clique no
        botão abaixo. Você também pode copiar o conteúdo direto desta tela.
      </p>
      <button
        onClick={baixar}
        style={{
          background: "#dc2626",
          color: "#ffffff",
          border: "none",
          borderRadius: 8,
          padding: "13px 22px",
          fontWeight: 700,
          fontSize: 15,
          cursor: "pointer",
          marginBottom: 28,
        }}
      >
        Baixar arquivo JSON novamente
      </button>
      <pre
        style={{
          background: "#111318",
          color: "#d8dee4",
          padding: 20,
          borderRadius: 10,
          overflow: "auto",
          fontSize: 13,
          lineHeight: 1.6,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {json}
      </pre>
    </div>
  );
}
