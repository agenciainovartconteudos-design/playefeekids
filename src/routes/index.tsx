import { createFileRoute } from "@tanstack/react-router";
import "@/atlas/shared/styles.css";
import Template from "@/atlas/templates/leadgen";
import rawConfig from "@/atlas/configs/leadgen.json";
import { TemplateRoot } from "@/atlas/shared/ui";
import type { TemplateConfig } from "@/atlas/types";

const config = rawConfig as unknown as TemplateConfig;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Play e Fé Kids — Material Bíblico Infantil para Memorizar Versículos",
      },
      {
        name: "description",
        content:
          "Material digital com atividades, jogos e versículos bíblicos para ensinar seu filho a amar a Palavra de Deus brincando.",
      },
      {
        property: "og:title",
        content: "Play e Fé Kids — Fé que se aprende brincando",
      },
      {
        property: "og:description",
        content:
          "Atividades, jogos e versículos bíblicos para toda a família. Garanta já o seu acesso.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <TemplateRoot config={config}>
      <Template config={config} />
    </TemplateRoot>
  );
}
